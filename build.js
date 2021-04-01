const fs = require('fs');
const puppeteer = require('puppeteer');

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
  // https://github.com/puppeteer/puppeteer/issues/331#issuecomment-323010213
  const finalHtml = await page.evaluate(() => document.body.innerHTML);
  // console.log(bodyHTML);
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
