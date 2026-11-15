import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    trace: 'on-first-retry',
    headless: false,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});