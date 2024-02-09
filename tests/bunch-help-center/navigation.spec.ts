import { test, expect } from '@playwright/test';

test.describe('Site navigation', () => {
    test('should allow me to navigate to the main website page from Help Center', async ({ context }) => {
        
        //Create a new page on the second tab
        const page = await context.newPage();

        await page.goto('https://help.bunch.capital/en/');

        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            // This action triggers the new tab
            page.getByRole('link', { name: 'Go to bunch' }).click() 
        ])

        // Wait for new page load
        await newPage.waitForLoadState();

        // Accept dialog on the main website page
        newPage.on('dialog', dialog => dialog.accept());
        await newPage.locator('button:has-text("Accept All")').first().click();

        //Explicitly assert the main website title
        await expect(newPage).toHaveTitle(/The OS/);
    })

    test('should allow me to open article collection', async ({ page }) => {
        
        //Create new two locators for collection card and article header
        const collectionCard = page.getByTestId('collection-card-classic');
        const articleHeader = page.getByRole('heading');
        
        await page.goto('https://help.bunch.capital/en/');
        
        // Open the fourth collection card
        await collectionCard.nth(3).click();
        
        //Explicitly assert the article name
        await expect(articleHeader).toHaveText('About Funds');
    })
});