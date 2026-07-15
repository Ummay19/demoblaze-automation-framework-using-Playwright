import { test } from '../fixtures/testSetup.js';
import HomePage from '../pages/HomePage.js';

test.describe('Product Module', () => {

  test('Open Samsung Product', async ({ page }) => {
    const home = new HomePage(page);
    await home.selectProduct('Samsung galaxy s6');
  });

  test('Open Nokia Product', async ({ page }) => {
    const home = new HomePage(page);
    await home.selectProduct('Nokia lumia 1520');
  });

  test('Open Sony Product', async ({ page }) => {
    const home = new HomePage(page);
    await home.selectProduct('Sony vaio i5');
  });

  test('Open MacBook Product', async ({ page }) => {
    const home = new HomePage(page);
    await home.selectProduct('MacBook air');
  });

  test('Open Dell Laptop Product', async ({ page }) => {
    const home = new HomePage(page);
    await home.selectProduct('Dell i7 8gb');
  });

});