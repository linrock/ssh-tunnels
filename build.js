const fs = require('fs');
const { JSDOM } = require('jsdom');
const puppeteer = require('puppeteer');
const beautify = require('js-beautify').html;

const OUT_DIR = './dist';                          // output dir, relative to this file
const HTML_OUTFILE = './dist/index.html';          // output html file, pretty-printed + cleaned
const DELETE_NODES = 'script, link[rel=preload]';  // these html tags are removed

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}
fs.copyFileSync(`./public/favicon.ico`, `${OUT_DIR}/favicon.ico`);

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
  // remove some html tags that we don't need
  const dom = new JSDOM(finalHtml);
  dom.window.document.
    querySelectorAll(DELETE_NODES).
    forEach((scriptEl) => scriptEl.parentNode.removeChild(scriptEl));

  finalHtml = dom.serialize();
  finalHtml = beautify(finalHtml, { indent_size: 2 });

  // write the final html to a file
  fs.open(HTML_OUTFILE, 'w', (err) => {
    if (err) {
      throw `Couldn't open file: ${HTML_OUTFILE}`;
    }
    fs.writeFile(HTML_OUTFILE, finalHtml, async (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Saved static html to dist/index.html (size: ${finalHtml.length})`);
      }
      // exit now that we're done
      await browser.close();
    });
  });
})();
