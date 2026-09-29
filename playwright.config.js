import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'tests/browser',use:{baseURL:'http://127.0.0.1:5173',channel:process.env.CI ? 'chromium' : 'chrome',headless:true},webServer:{command:'npm run dev -- --port 5173',url:'http://127.0.0.1:5173',reuseExistingServer:!process.env.CI},outputDir:'temp/test-results',reporter:'list',workers:1});
