import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src',

  timeout: 30000,

  retries: 1,

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['html']
  ]
});