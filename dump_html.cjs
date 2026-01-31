const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:3030/1', { waitUntil: 'networkidle' });
    const html = await page.content();
    require('fs').writeFileSync('slide1_dump.html', html);
    await page.screenshot({ path: 'slide1_debug.png' });
    console.log("Dumped HTML to slide1_dump.html");
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
})();
