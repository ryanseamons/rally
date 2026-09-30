import { test, expect } from '@playwright/test';

test('the draw deals three cards and picking one opens prep', async ({ page }) => {
  await page.goto('/impromptu');
  const cards = page.locator('.topic-card');
  await expect(cards).toHaveCount(3);
  const text = await cards.nth(1).locator('.topic-copy').textContent();
  await cards.nth(1).click();
  await expect(page.locator('.chosen-topic h1')).toHaveText(text);
  await expect(page.locator('#outline-0')).toBeVisible();
});

test('spotlight shows cue words, runs the speech clock, and closes with Escape', async ({ page }) => {
  await page.goto('/impromptu');
  await page.getByRole('button', { name: /Pick this/ }).first().click();
  await page.locator('#outline-0').fill('Working together helps');
  await page.getByRole('button', { name: 'Ready to speak' }).click();
  await page.getByRole('button', { name: /Step into the spotlight/ }).click();
  const stage = page.getByRole('dialog', { name: /Spotlight/ });
  await expect(stage).toBeVisible();
  await expect(stage.getByText('Working together helps')).toBeVisible();
  await expect(stage.getByRole('button', { name: 'Start speaking' })).toBeFocused();
  await stage.getByRole('button', { name: 'Start speaking' }).click();
  await expect(stage.getByRole('button', { name: 'Pause' })).toBeVisible();
  await page.waitForTimeout(1300);
  await page.keyboard.press('Escape');
  await expect(stage).toHaveCount(0);
  await expect(page.getByRole('button', { name: /Step into the spotlight/ })).toBeVisible();
  // The shared clock kept running behind the stage.
  await page.getByRole('button', { name: /Step into the spotlight/ }).click();
  await page.getByRole('dialog', { name: /Spotlight/ }).getByRole('button', { name: /Finish/ }).click();
  await expect(page.getByRole('heading', { name: 'What worked? What’s next?' })).toBeVisible();
});

test('round ribbon marks the current speech and moves with Next', async ({ page }) => {
  await page.goto('/timer');
  const ribbon = page.getByRole('list', { name: 'Round order' }).first();
  await expect(ribbon.locator('[aria-current="step"]')).toHaveAttribute('aria-label', /Team A constructive/);
  await page.getByRole('button', { name: /Next: Team B constructive/ }).click();
  await expect(ribbon.locator('[aria-current="step"]')).toHaveAttribute('aria-label', /Team B constructive/);
  await expect(page.locator('.prep-token')).toHaveCount(6);
});

test('model notes land in time with the example reading', async ({ page }) => {
  await page.goto('/lincoln-douglas');
  await page.getByRole('tab', { name: 'Practice flowing' }).click();
  await page.getByRole('button', { name: 'Compare model notes' }).click();
  const acNotes = page.locator('.flow-col').first().locator('.live-line');
  await expect(acNotes).toHaveCount(3);
  await page.locator('audio').first().evaluate((a) => { a.muted = true; a.currentTime = 6; return a.play(); });
  await expect(page.locator('.live-badge')).toBeVisible();
  await expect(acNotes).toHaveCount(1);
  await page.locator('audio').first().evaluate((a) => { a.currentTime = 16; });
  await expect(acNotes).toHaveCount(3);
});
