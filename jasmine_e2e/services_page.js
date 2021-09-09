const { browser } = require('protractor');
const EC = protractor.ExpectedConditions;
const ServicesPage = require('../po/pages/ServicesPage.js')
const servicesPage = new ServicesPage();

describe("Services Page", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get('https://s.onliner.by/tasks');
        await browser.driver.manage().window().maximize();
    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {

        it(`verify that Services Page title is equal to the 'Заказы на услуги'`, async () => {
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).toEqual('Заказы на услуги');
        });
    });


    describe("Subcontractors verification", () => {

        it(`verify style on hover`, async () => {
            const subcontractor = await servicesPage.Services.Subcontractors;

            await browser.actions().mouseMove(subcontractor).perform();

            return expect((subcontractor).getCssValue('text-decoration-color')).toBe('rgb(0, 102, 204)');
            

        });

        it(`verify href`, async () => {
            const subcontractor = await servicesPage.Services.Subcontractors;

            return expect(subcontractor.getAttribute('href')).toEqual('https://s.onliner.by/profiles');
            

        });
    });

        describe("Filter", () => {

            it(`Verify filter value is selected after click`, async () => {
                const filter = await servicesPage.Services.FilterItem;
                const result = await servicesPage.Services.SelectedFilter;
    
                await filter.click();
    
                return browser.isElementPresent(result);
    
            });

    });

    describe("Share icons", () => {

        it(`Verify share icons are visible`, async () => {
            const share = servicesPage.ShareButtons;

            return expect(share.count()).toBe(2);

        });

});
 
});
