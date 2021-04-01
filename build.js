const fs = require('fs');
const { JSDOM } = require('jsdom');
const puppeteer = require('puppeteer');
const beautify = require('js-beautify').html;

const OUT_DIR = './dist';
const HTML_OUTFILE = './dist/index.html';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    // hack: this depends on the dev server running
    await page.goto('http://localhost:8080', {waitUntil: 'networkidle2', timeout: 5000});
  } catch {
    console.error('Error: use `yarn serve` to run the dev server at http://localhost:8080')
    await browser.close();
    return;
  }
  // get the html after rendering all JS templates
  let finalHtml = `<html>${await page.evaluate(() => document.documentElement.innerHTML)}</html>`;
  // remove all script tags since we don't use any client JS
  const dom = new JSDOM(finalHtml);
  dom.window.document.
    querySelectorAll('script').
    forEach((scriptEl) => scriptEl.parentNode.removeChild(scriptEl));

  finalHtml = dom.serialize();
  finalHtml = beautify(finalHtml, { indent_size: 2 });

  // write the final html to a file
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR);
  }
  fs.open(HTML_OUTFILE, 'w', (err) => {
    if (err) {
      throw `Couldn't open file: ${HTML_OUTFILE}`;
    }
    fs.writeFile(HTML_OUTFILE, finalHtml, async (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Saved static html to dist/index.html');
      }
      await browser.close();
    });
  });
})();
