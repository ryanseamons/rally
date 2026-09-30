import {defineConfig} from '@playwright/test';
const port=process.env.RALLY_TEST_PORT||5173;
export default defineConfig({testDir:'tests/browser',use:{baseURL:`http://127.0.0.1:${port}`,channel:process.env.CI ? 'chromium' : 'chrome',headless:true},webServer:{command:`npm run dev -- --port ${port} --strictPort`,url:`http://127.0.0.1:${port}`,reuseExistingServer:!process.env.CI},outputDir:'temp/test-results',reporter:'list',workers:1});
