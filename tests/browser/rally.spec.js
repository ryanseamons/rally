import {test,expect} from '@playwright/test';
const note={id:'test-note',date:'2026-09-29',topic:'Belonging',judge:'Me',keep:'Pause between ideas',next:'Explain my example',ratings:{Clarity:'Good'}};
test('notebook restore, duplicate protection, download, reload, and invalid file', async({page})=>{
 await page.goto('/'); await page.getByRole('tab',{name:'My notebook'}).click();
 const input=page.getByLabel('Choose notebook backup');
 await input.setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify([note]))});
 await expect(page.getByRole('status').filter({hasText:'1 note added'})).toBeVisible();
 await input.setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify([note]))});
 await expect(page.getByRole('status').filter({hasText:'already in your notebook'})).toBeVisible();
 const download=page.waitForEvent('download'); await page.getByRole('button',{name:'Download backup'}).click();expect((await download).suggestedFilename()).toMatch(/^rally-notebook/);
 await page.reload();await page.getByRole('tab',{name:'My notebook'}).click();await expect(page.getByRole('article',{name:'Saved reflection: Belonging'})).toContainText('Pause between ideas');
 await input.setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{}')});await expect(page.getByRole('status').filter({hasText:'Choose a Rally notebook backup'})).toBeVisible();expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('rally-notebook')).length)).toBe(1);
});
test('topics redraw without jumping and LD examples play from local assets',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewportSize({width:1280,height:700});await page.goto('/');await page.getByRole('tab',{name:'Impromptu',exact:true}).click();
 const draw=page.getByRole('button',{name:'Draw 3 new topics'});await draw.scrollIntoViewIfNeeded();const before=await page.evaluate(()=>scrollY);await draw.click();await page.waitForTimeout(400);expect(Math.abs(await page.evaluate(()=>scrollY)-before)).toBeLessThan(5);
 await page.getByRole('tab',{name:'Lincoln–Douglas',exact:true}).click();await page.locator('audio').first().evaluate(e=>e.play());await expect.poll(()=>page.locator('audio').first().evaluate(e=>e.readyState)).toBeGreaterThan(1);expect(await page.locator('audio').first().evaluate(e=>e.currentSrc)).toContain('/audio/');
 await page.getByRole('tab',{name:'Learn',exact:true}).click();await expect(page.getByRole('heading',{level:1})).toBeVisible();expect(errors).toEqual([]);
});
test('phone view has no horizontal overflow',async({page})=>{await page.setViewportSize({width:390,height:844});await page.goto('/');for(const name of ['Home','Impromptu','Lincoln–Douglas','Learn','My notebook']){await page.getByRole('tab',{name,exact:true}).click();expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);}await page.screenshot({path:'temp/rally-mobile-notebook.png',fullPage:true});});
test('complete a speech and save a reflection',async({page})=>{
 await page.goto('/');await page.getByRole('tab',{name:'Impromptu',exact:true}).click();await page.getByRole('button',{name:/Pick this/}).first().click();
 await page.locator('#outline-0').fill('Working together helps us learn');await page.locator('#outline-1').fill('We explain ideas');await page.locator('#outline-2').fill('My science group');
 await page.getByRole('button',{name:'Start timer',exact:true}).click();await expect(page.getByRole('button',{name:'Pause',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Ready to speak'}).click();await expect(page.getByRole('heading',{name:'Your ideas. Your voice.'})).toBeVisible();
 await page.getByRole('button',{name:'Finish & reflect'}).click();await page.locator('#keep').fill('Used a clear example');await page.locator('#try').fill('Pause before my last point');await page.getByRole('button',{name:'Save to my notebook'}).click();
 await expect(page.getByRole('article')).toContainText('Used a clear example');expect(await page.evaluate(()=>JSON.parse(localStorage.getItem('rally-notebook')).length)).toBe(1);
});
