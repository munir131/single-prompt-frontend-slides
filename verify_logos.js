const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log("Navigating to slide 1...");
    await page.goto('http://localhost:3030/1', { waitUntil: 'networkidle' });
    
    console.log("Taking screenshot...");
    await page.screenshot({ path: 'debug_slide_1.png' });
    
    const logos = [
      { name: 'GDG Rajkot', selector: 'img[src="/img/gdg-rajkot.png"]' },
      { name: 'JS Guj', selector: 'img[src="/img/js-guj.png"]' }
    ];
    
    for (const logo of logos) {
      console.log(`Checking ${logo.name}...`);
      const el = await page.$(logo.selector);
      
      if (el) {
        const isVisible = await el.isVisible();
        const box = await el.boundingBox();
        const style = await page.evaluate((e) => {
          const s = window.getComputedStyle(e);
          return {
            position: s.position,
            zIndex: s.zIndex,
            display: s.display,
            top: s.top,
            left: s.left,
            right: s.right
          };
        }, el);
        
        console.log(`${logo.name}: Found in DOM`);
        console.log(`  Visible: ${isVisible}`);
        console.log(`  Box: ${JSON.stringify(box)}`);
        console.log(`  Style: ${JSON.stringify(style)}`);
      } else {
        console.log(`${logo.name}: NOT found in DOM`);
      }
    }
  } catch (e) {
    console.error("Error:", e);
  } finally {
    await browser.close();
  }
})();
