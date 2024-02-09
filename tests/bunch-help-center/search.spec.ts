import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://help.bunch.capital/en/');
});

test.describe('Search article', () => {
    test('should allow me to see that each list item contains a key word', async ({ page }) => {

        //Create new two locators for search field and search results popup list
        const searchField = page.getByPlaceholder('Search for articles...');
        const searchPopup = page.getByTestId ('search-popup');
        
        //Fill the search field with key word
        await searchField.fill('investments');

        //Assert that search results popup is visible
        await expect(searchPopup).toBeVisible();

        //Assert that each popup item contain key word (partially)
        for (const row of await searchPopup.locator('a').all()) {
            await expect (row).toContainText('invest', {ignoreCase: true});
        }
    })

    test('should allow me to open article', async ({ page }) => {

        //Create new two locators for search field and search results popup list
        const searchField = page.getByPlaceholder('Search for articles...');
        const searchPopup = page.getByTestId ('search-popup');
        
        //Fill the search field with key word
        await searchField.fill('investments');

        //Assert that search results popup is visible
        await expect(searchPopup).toBeVisible();

        //Select the fourth article from the search popup
        await searchPopup.locator('a').nth(3).click();

        //Explicitly assert that article has been open
        await expect(page).toHaveTitle(/Which jurisdictions/);
    })
});