const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa1$/, async () => {
    await browser.url(`https://demoqa.com/`);
    // await expect(browser).toHaveTitle('ToolsQA');
});

Then(/^I expect home page is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});

