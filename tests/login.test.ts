import { test, expect, chromium } from "@playwright/test";

test("Login using CSS locators", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

test("Login using build in locators ", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();
});

test("Login using the xpath", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator("//input[@name='user-name']").fill("standard_user");
  await page.locator("//input[@name='password']").fill("secret_sauce");
  await page.locator("//input[@name='login-button']").click();
});
