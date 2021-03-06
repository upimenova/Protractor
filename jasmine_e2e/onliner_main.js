const { browser } = require('protractor');
const EC = protractor.ExpectedConditions;
const OnlinerMain = require('../po/pages/OnlinerMain.js')
const onlinerMain = new OnlinerMain();
// const driver = require("selenium-webdriver");

describe("Main Onliner Page", () => {

    beforeEach(async () => {
        await browser.manage().deleteAllCookies();
        await browser.get(browser.baseUrl);
        await browser.driver.manage().window().maximize();
    });

    describe("PAGE TITLE AND URL VERIFICATION", () => {
        it(`verify that Main Page url is equal to the ${browser.baseUrl}`, async () => {
            const url = await browser.getCurrentUrl();

            return expect(url).toEqual(browser.baseUrl);
        });

        it(`verify that Home Page title is equal to the 'Onliner'`, async () => {
            const pageTitle = await browser.getTitle();

            return expect(pageTitle).toEqual('Onliner');
        });
    });

    describe("Page Logo verification", () => {

        it(`verify that logo is clickable`, async () => {
            const logo = await onlinerMain.Header.HeaderLogo;

            browser.wait(EC.elementToBeClickable(logo), 3000);
        });
        it(`verify logo url is the same as main page`, async () => {
            const logo = await onlinerMain.Header.HeaderLogo;

            return expect(logo.getAttribute('href')).toEqual(browser.baseUrl);
        });
    });

    describe("Search verification", () => {

        it(`verify search is performed`, async () => {
            const search = await onlinerMain.Header.SearchField;

            await search.sendKeys('iPhone');

            await search.sendKeys('\u0008');
        
            await browser.switchTo().frame(element(by.css('iframe.modal-iframe')).getWebElement());

            return browser.wait(EC.textToBePresentInElement($('.text_match'), 'iPhon'), 5000);

        });
    });

        describe("Cart", () => {

            it(`verify color on hover`, async () => {
                const cart = await onlinerMain.CartButton;
    
                await browser.actions().mouseMove(cart).perform();
    
                return expect((cart).getCssValue('z-index')).toBe('2');
    
            });

    });
 
});
