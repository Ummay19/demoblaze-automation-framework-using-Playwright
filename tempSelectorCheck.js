const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(5000);
  const selectors = [
    'input[name="username"]',
    'input[name="password"]',
    'button[type="submit"]',
    'h6',
    'span',
    'div.oxd-input-group',
    'div.orangehrm-login-layout'
  ];
  for (const sel of selectors) {
    const el = await page.$(sel);
    console.log(sel, !!el);
    if (el) {
      console.log(await page.evaluate(e => e.outerHTML, el));
    }
  }
  await browser.close();
})();
