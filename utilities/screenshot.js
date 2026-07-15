import { test } from '@playwright/test';

/* Screenshot during step */
export async function attachStepScreenshot(page, name) {

  if (!page || page.isClosed()) return;

  await test.info().attach(name, {
    body: await page.screenshot(),
    contentType: 'image/png'
  });
}


/* Screenshot after each test */
export async function attachScreenshotAfterEach(page, testInfo) {

  if (!page || page.isClosed()) return;

  try {
    await testInfo.attach('Final Screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png'
    });

    if (testInfo.status !== testInfo.expectedStatus) {
      await testInfo.attach('Failure Screenshot', {
        body: await page.screenshot(),
        contentType: 'image/png'
      });
    }
  } catch (error) {
    console.log('Screenshot skipped - page already closed.');
  }
}