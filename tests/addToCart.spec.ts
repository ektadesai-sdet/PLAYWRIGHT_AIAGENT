import { test, expect } from '@playwright/test';

test('Login, select iPhone X, add to cart, and verify cart', async ({ page }) => {
  const productName = 'iphone X'; // Change this to any product name

  // Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveURL('https://rahulshettyacademy.com/loginpagePractise/');
 // await expect(page.locator('h2')).toContainText('Login');

  // Login
  await page.fill('#username', 'rahulshettyacademy');
  await page.fill('#password', 'learning');
  await page.click('#signInBtn');

  // Wait for navigation to shop page
  await page.waitForURL('**/angularpractice/shop');

  // Select product and add to cart
  const productCard = page.locator(`.card-title:has-text("${productName}")`).first();
  await expect(productCard).toBeVisible();
  await productCard.locator('xpath=../../..').locator('button:has-text("Add")').click();

  // Go to cart
  await page.click('a.nav-link.btn.btn-primary'); // Cart button

  // Verify product is in cart
  const cartItem = page.locator(`tr td:has-text("${productName}")`);
  await expect(cartItem).toBeVisible();

  // Checkout
  await page.click('button.btn.btn-success'); // Checkout button


});
