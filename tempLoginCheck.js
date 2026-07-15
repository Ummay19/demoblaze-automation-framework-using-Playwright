const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.waitForSelector('input[name="username"]', { timeout: 20000 });
  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3000);
  const locators = [
    'h6.oxd-text--h6',
    'h6.oxd-text--h6',
    'span.oxd-topbar-header-breadcrumb span',
    'div.oxd-dashboard-widget',
    'h6.oxd-text--h6.oxd-topbar-header-breadcrumb',
    'div.orangehrm-dashboard',
    'div.oxd-layout-context h6',
  ];
  for (const sel of locators) {
    const el = await page.$(sel);
    console.log(sel, !!el);
    if (el) {
      console.log(await page.evaluate(el => el.innerText, el));
      console.log(await page.evaluate(el => el.outerHTML, el));
    }
  }
  await browser.close();
})();
