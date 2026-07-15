import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class CartPage {

  constructor(page) {
    this.page = page;

    this.placeOrderBtn = page.locator("//button[text()='Place Order']");
    this.deleteBtn = page.locator("//a[text()='Delete']");
    this.totalAmount = page.locator('#totalp');
  }

  async clickPlaceOrder() {

    await test.step('Click Place Order', async () => {
      await this.placeOrderBtn.click();
      await attachStepScreenshot(this.page, 'Place Order Clicked');
    });

  }

  async deleteProduct() {

    await test.step('Delete Product From Cart', async () => {

      await this.deleteBtn.first().click();

      await this.page.waitForTimeout(2000);

      await attachStepScreenshot(this.page, 'Product Deleted');
    });

  }

}

export default CartPage;