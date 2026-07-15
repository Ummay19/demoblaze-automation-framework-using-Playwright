import { test } from '../fixtures/testSetup.js';
import { attachStepScreenshot } from '../utilities/screenshot.js';

class HomePage {

  constructor(page) {
    this.page = page;

    this.phonesCategory = page.locator("//a[text()='Phones']");
    this.laptopsCategory = page.locator("//a[text()='Laptops']");
    this.nextBtn = page.locator("//button[text()='Next']");
  }

  productLink(productName) {
    return this.page.locator(`//a[text()='${productName}']`).first();
  }

  async selectProduct(productName) {

    await test.step(`Select Product: ${productName}`, async () => {

      
      if (productName.includes('MacBook') || 
          productName.includes('Dell') || 
          productName.includes('Sony')) {

        await this.laptopsCategory.click();
        await this.page.waitForTimeout(2000);
      }

      if (productName.includes('Samsung') || 
          productName.includes('Nokia')) {

        await this.phonesCategory.click();
        await this.page.waitForTimeout(2000);
      }

      await this.productLink(productName).click();

      await attachStepScreenshot(this.page, 'Product Selected');
    });

  }

}

export default HomePage;