import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('nora test');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('noratest@yahoo.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('321');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('test');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByLabel('Country:').selectOption('france');
  await page.getByLabel('Colors:').selectOption('blue');
  await page.getByLabel('Sorted List:').selectOption('dog');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '16' }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '30' }).click();
  await page.getByPlaceholder('Start Date').fill('2026-04-23');
  await page.getByPlaceholder('End Date').fill('2026-04-29');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});