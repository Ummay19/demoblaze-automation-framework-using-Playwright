
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  fullyParallel: false,
  workers: 1,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    trace: 'on-first-retry',
     actionTimeout: 20000,     
    navigationTimeout: 30000,
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],

});