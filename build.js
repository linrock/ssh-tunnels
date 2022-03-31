const fs = require('fs');
const { Snapshot } = require('snapshot-url');

const OUT_DIR = './dist';                 // output dir, relative to this file
const HTML_OUTFILE = './dist/index.html'; // output html file, pretty-printed + cleaned

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR);
}
fs.copyFileSync(`./public/favicon.ico`, `${OUT_DIR}/favicon.ico`);

(async () => {
  // hack: this depends on the dev server running
  const url = 'http://localhost:8080';

  const snapshot = new Snapshot(url);
  const dom = await snapshot.renderDOM();

  // remove some html tags that we don't need
  const DELETE_NODES = 'script, link[rel=preload]';
  dom.window.document.
    querySelectorAll(DELETE_NODES).
    forEach((scriptEl) => scriptEl.parentNode.removeChild(scriptEl));

  const finalHtml = snapshot.getHtml({ prettyPrint: true });

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
    });
  });
})();
