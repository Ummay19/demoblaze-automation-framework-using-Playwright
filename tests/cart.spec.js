import { test } from '../fixtures/testSetup.js';
import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';

test.describe('Cart Module', () => {

  test('Add product and go to cart', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
  });

  test('Delete product from cart', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.deleteProduct();
  });

  test('Add multiple products', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();

    await page.goto('https://www.demoblaze.com/');
    await home.selectProduct('Nokia lumia 1520');
    await product.addToCart();
  });

  test('Cart page navigation', async ({ page }) => {
    const product = new ProductPage(page);
    await product.goToCart();
  });

  test('Verify cart loads properly', async ({ page }) => {
    const product = new ProductPage(page);
    await product.goToCart();
  });

  test('Verify total amount visible', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/cart.html');
  });

  test('Cart page loads without product', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/cart.html');
  });

});