import { test, expect } from '@playwright/test';

test('Verify login, inventory page title, and cart icon', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(1000); 

 
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.waitForTimeout(500); 

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(500); 


  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(500);

  await expect(page).toHaveURL(/.*inventory\.html/);
  const pageTitle = page.locator('[data-test="title"]');
  await expect(pageTitle).toBeVisible();
  await expect(pageTitle).toHaveText('Products');
  await page.waitForTimeout(1000); 


  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.waitForTimeout(1000); 

  const cartBadge = page.locator('[data-test="shopping-cart-link"]');
  await expect(cartBadge).toBeVisible();
  await expect(cartBadge).toHaveText('1');
  await page.waitForTimeout(1000); 
});