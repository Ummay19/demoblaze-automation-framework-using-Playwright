import { test, expect } from '../fixtures/testSetup.js';

test.describe('UI Validations', () => {

  test('Verify Navbar visible', async ({ page }) => {
    await expect(page.locator('#navbarExample')).toBeVisible();
  });

  test('Verify Cart link visible', async ({ page }) => {
    await expect(page.locator('#cartur')).toBeVisible();
  });

  test('Verify Login link visible', async ({ page }) => {
    await expect(page.locator('#login2')).toBeVisible();
  });

});