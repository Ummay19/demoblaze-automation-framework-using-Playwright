import { test, expect } from '../fixtures/testSetup.js';
import orderData from '../testdata/orderData.json' assert { type: 'json' };

import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage.js';
import CartPage from '../pages/CartPage.js';
import OrderPage from '../pages/OrderPage.js';

test.describe('Order Module', () => {

  test('Place Order Successfully', async ({ page }) => {

    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);

    const data = orderData.validOrder[0];

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.clickPlaceOrder();
    await order.placeOrder(data);

    await expect(order.confirmMsg)
      .toContainText(data.expectedMessage);
  });

  test('Place order without name', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);

    const data = orderData.withoutName[0];

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.clickPlaceOrder();
    await order.placeOrder(data);

  });

  test('Place order with invalid card', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);

    const data = orderData.invalidCard[0];

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.clickPlaceOrder();
    await order.placeOrder(data);

    await expect(order.confirmMsg)
      .toContainText(data.expectedMessage);
    await page.waitForTimeout(2000);
  });


  test('Verify confirmation popup appears', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);

    const data = orderData.validOrder[0];

    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.clickPlaceOrder();
    await order.placeOrder(data);

    await expect(order.confirmMsg)
      .toContainText(data.expectedMessage);
    
    await page.waitForTimeout(2000);
  });

  test('Verify purchase ID generated', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);

    const data = orderData.validOrder[0];
    const successPopup = page.locator('.sweet-alert');
    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.clickPlaceOrder();
    await order.placeOrder(data);
    await expect(successPopup).toBeVisible();
    await expect(order.confirmMsg).toHaveText(data.expectedMessage);

    await page.waitForTimeout(2000);
  });

  test('Verify purchase success popup visible', async ({ page }) => {
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page);
    const order = new OrderPage(page);
    const data = orderData.validOrder[0];
    const successPopup = page.locator('.sweet-alert');
    const okBtn = page.locator('.sweet-alert').getByRole('button', { name: 'OK' });
    await home.selectProduct('Samsung galaxy s6');
    await product.addToCart();
    await product.goToCart();
    await cart.clickPlaceOrder();
    await order.placeOrder(data);
    await expect(successPopup).toBeVisible();
    await expect(order.confirmMsg).toHaveText(data.expectedMessage);
    await expect(okBtn).toBeVisible();
    await page.waitForTimeout(2000);
  });

});