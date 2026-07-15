import { test, expect } from '../fixtures/testSetup.js';

test.describe('Navigation Module', () => {

  //  beforeAll hook
  test.beforeAll(async () => {
    console.log('Navigation Test Suite Started');
  });

  //  afterAll hook
  test.afterAll(async () => {
    console.log('Navigation Test Suite Finished');
  });

  test('Verify Home URL', async ({ page }) => {
    await expect(page).toHaveURL('https://www.demoblaze.com/');
  });

  test('Verify Title', async ({ page }) => {
    await expect(page).toHaveTitle('STORE');
  });

  test('Verify Phones Category Click', async ({ page }) => {
    await page.locator("//a[text()='Phones']").click();
  });

  test('Verify Laptops Category Click', async ({ page }) => {
    await page.locator("//a[text()='Laptops']").click();
  });

  test('Verify Monitors Category Click', async ({ page }) => {
    await page.locator("//a[text()='Monitors']").click();
  });

  test('Verify Phones Category loads products', async ({ page }) => {
    await page.locator("//a[text()='Phones']").click();
    await page.waitForTimeout(2000);
  });

  test('Verify Laptops Category loads products', async ({ page }) => {
    await page.locator("//a[text()='Laptops']").click();
    await page.waitForTimeout(2000);
  });

});