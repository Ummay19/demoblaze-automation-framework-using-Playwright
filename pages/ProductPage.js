import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class ProductPage {

  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator("//a[text()='Add to cart']");
    this.cartLink = page.locator('#cartur');
  }

  async addToCart() {

    await test.step('Add Product To Cart', async () => {

      await this.page.waitForSelector("//a[text()='Add to cart']", { state: 'visible' });

      const [dialog] = await Promise.all([
        this.page.waitForEvent('dialog'),
        this.addToCartBtn.click()
      ]);

      await dialog.accept();

      await attachStepScreenshot(this.page, 'Product Added To Cart');
    });

  }

  async goToCart() {

  await test.step('Navigate To Cart', async () => {

    await this.cartLink.click();

    await this.page.waitForTimeout(2000);

    await attachStepScreenshot(this.page, 'Cart Page Opened');
  });

}

}

export default ProductPage;