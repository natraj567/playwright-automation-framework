
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  // Test directory
  testDir: './tests',

  // Execute tests in parallel
  fullyParallel: true,

  // HTML report
  reporter: 'html',

  // Common UI configuration
  use: {
    baseURL: process.env.ORANGEHRM_UI_URL,
    trace: 'on-first-retry',
    headless: false,
  },

  // Browser configuration
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
