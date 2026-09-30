import { test, expect } from '@playwright/test';

test('each section has its own address, with back and forward', async ({ page }) => {
  await page.goto('/timer');
  await expect(page.getByRole('tab', { name: 'Timer', exact: true })).toHaveAttribute('aria-selected', 'true');
  await expect(page).toHaveTitle('Round timer · Rally');
  await page.getByRole('tab', { name: 'Learn', exact: true }).click();
  await expect(page).toHaveURL(/\/learn$/);
  await page.goBack();
  await expect(page).toHaveURL(/\/timer$/);
  await expect(page.getByRole('tab', { name: 'Timer', exact: true })).toHaveAttribute('aria-selected', 'true');
  await page.goto('/lincoln-douglas');
  await expect(page.getByRole('tab', { name: 'Lincoln–Douglas', exact: true })).toHaveAttribute('aria-selected', 'true');
  await page.goto('/not-a-page');
  await expect(page).toHaveURL(/127\.0\.0\.1:\d+\/$/);
});

test('round timer uses NSDA times, keeps edits, and resets', async ({ page }) => {
  await page.goto('/timer');
  const timerPage = page.locator('.round-timer-page');
  const speechClock = timerPage.locator('.round-main').getByRole('timer');
  await timerPage.getByRole('radio', { name: /Lincoln–Douglas/ }).click();
  await expect(speechClock).toHaveText('6:00');
  await expect(timerPage.getByRole('timer', { name: /Affirmative prep: 4:00 left/ })).toBeVisible();
  await timerPage.getByRole('button', { name: /Next: Negative cross-examination/ }).click();
  await expect(speechClock).toHaveText('3:00');
  await timerPage.getByRole('button', { name: 'Edit times' }).click();
  await timerPage.getByLabel('Affirmative constructive minutes').fill('5');
  await timerPage.getByRole('button', { name: 'Done editing' }).click();
  await timerPage.getByRole('button', { name: /Affirmative constructive\s*5:00/ }).click();
  await expect(speechClock).toHaveText('5:00');
  await page.reload();
  await expect(speechClock).toHaveText('5:00');
  await timerPage.getByRole('button', { name: /Reset to NSDA times/ }).click();
  await expect(speechClock).toHaveText('6:00');
  await timerPage.getByRole('button', { name: 'Use prep' }).first().click();
  await expect(timerPage.getByRole('button', { name: 'Stop prep' })).toBeVisible();
  await page.getByRole('tab', { name: 'Learn', exact: true }).click();
  await page.getByRole('tab', { name: 'Timer', exact: true }).click();
  await expect(timerPage.getByRole('button', { name: 'Stop prep' })).toHaveCount(0);
});

test('send to my coach builds an email and remembers the address only locally', async ({ page }) => {
  const note = { id: 'n1', date: new Date().toISOString(), topic: 'Belonging', judge: 'Me', keep: 'Clear example', next: 'Slow down', ratings: { Clarity: 'Good' } };
  await page.goto('/');
  await page.evaluate((n) => localStorage.setItem('rally-notebook', JSON.stringify([n])), note);
  await page.goto('/notebook');
  await page.getByRole('button', { name: 'Send to my coach' }).click();
  const email = page.getByLabel('Coach’s email (optional)');
  await email.fill('coach@school.org');
  await email.blur();
  const href = await page.getByRole('link', { name: 'Open email' }).getAttribute('href');
  expect(href).toMatch(/^mailto:coach%40school\.org\?subject=Rally%20practice%3A%20Belonging&body=/);
  expect(decodeURIComponent(href)).toContain('Try next: Slow down');
  expect(await page.evaluate(() => localStorage.getItem('rally-coach-email'))).toBe('coach@school.org');
  await page.reload();
  await page.getByRole('button', { name: 'Send to my coach' }).click();
  await expect(page.getByLabel('Coach’s email (optional)')).toHaveValue('coach@school.org');
});

test('home loads WebP images and WOFF2 fonts without errors', async ({ page }) => {
  const requested = [];
  const failed = [];
  page.on('response', (r) => {
    requested.push(new URL(r.url()).pathname);
    if (r.status() >= 400) failed.push(`${r.status()} ${r.url()}`);
  });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  expect(failed).toEqual([]);
  expect(requested.some((p) => p.endsWith('.webp'))).toBe(true);
  expect(requested.some((p) => p.endsWith('.woff2'))).toBe(true);
  expect(requested.filter((p) => /\.(png|ttf)$/.test(p) && !p.includes('icon'))).toEqual([]);
});
