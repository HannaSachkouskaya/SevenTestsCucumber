const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const alert = require('../pageobjects/alert.page');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa4$/, async () => {
    await browser.url(`https://demoqa.com/`);
    
});

Then(/^I expect home page4 is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Alert Button "(.*)"$/, async (alertbutton) => {
    await alert.alertButton(alertbutton).waitForDisplayed();
    expect (await alert.alertButton(alertbutton).isDisplayed()).is.equal(true);
});

When(/^I scroll Alert Button "(.*)"$/, async (alertbutton) => {
    await alert.alertButton(alertbutton).scrollIntoView();
   
});

When(/^I click on Alert Button "(.*)"$/, async (alertbutton) => {
    await alert.alertButton(alertbutton).click();
});

Then(/^I expect to displayed Browse Windows Button "(.*)"$/, async (browsWindow) => {
    await alert.browserWindowsButton(browsWindow).waitForDisplayed();
    expect (await alert.browserWindowsButton(browsWindow).isDisplayed()).is.equal(true);
});

When(/^I click on Brows Windows Button "(.*)"$/, async (browsWindow) => {
    await alert.browserWindowsButton(browsWindow).click();
});

Then(/^I expect to displayed New Tab Button "(.*)"$/, async (newTab) => {
    await alert.newTabButton(newTab).waitForDisplayed();
    expect (await alert.newTabButton(newTab).isDisplayed()).is.equal(true);
});

When(/^I click on New Tab Button "(.*)"$/, async  (newTab) => {
    await alert.newTabButton(newTab).click();
});

When(/^I switch New Tab$/, async () => {
    await browser.switchWindow(`https://demoqa.com/sample`);
});

Then(/^I expect New Tab Content "(.*)"$/, async (newTabContent) => {
    await alert.switchNewTabContent(newTabContent).waitForDisplayed();
    expect (await alert.switchNewTabContent(newTabContent).isDisplayed()).is.equal(true);
});

When(/^I switchBack ToolsQA$/, async () => {
    await browser.switchWindow(`https://demoqa.com/browser-windows`);
});

Then(/^I expect to displayed New Window Button "(.*)"$/, async (newWindow) => {
    await alert.newWindowButton(newWindow).waitForDisplayed();
    expect (await alert.newWindowButton(newWindow).isDisplayed()).is.equal(true);
});

When(/^I click on New Window Button "(.*)"$/, async (newWindow) => {
    await alert.newWindowButton(newWindow).click();
});

When(/^I switch New Window$/, async () => {
    await browser.switchWindow(`https://demoqa.com/sample`);
});

Then(/^I expect New Window Content "(.*)"$/, async (newWindowContent) => {
    await alert.newWindowContent(newWindowContent).waitForDisplayed();
    expect (await alert.newWindowContent(newWindowContent).isDisplayed()).is.equal(true);
});

When(/^I switchBack ToolsQAPage$/, async () => {
    await browser.switchWindow(`https://demoqa.com/browser-windows`);
});

Then(/^I expect to displayed Modals Dialog Button "(.*)"$/, async (modalDialogsButton) => {
    await alert.modalDialogsButton(modalDialogsButton).waitForDisplayed();
    expect (await alert.modalDialogsButton(modalDialogsButton).isDisplayed()).is.equal(true);
});

When(/^I scroll Modals Dialog Button "(.*)"$/, async (modalDialogsButton) => {
    await alert.modalDialogsButton(modalDialogsButton).scrollIntoView();
});

When(/^I click on Modals Dialog Button "(.*)"$/, async (modalDialogsButton) => {
    await alert.modalDialogsButton(modalDialogsButton).click();
});

Then(/^I expect to displayed small Modals Button "(.*)"$/, async (smallModalButton) => {
    await alert.smallModalButton(smallModalButton).waitForDisplayed();
    expect (await alert.smallModalButton(smallModalButton).isDisplayed()).is.equal(true);
});

When(/^I click on small Modals Button "(.*)"$/, async (smallModalButton) => {
    await alert.smallModalButton(smallModalButton).click();
});

Then(/^I expect to displayed small Modal Window$/, async () => {
    await alert.smallModalWindow.waitForDisplayed();
    expect (await alert.smallModalWindow.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed small Modal Content "(.*)"$/, async (smallModalContent) => {
    await alert.smallModalContent(smallModalContent).waitForDisplayed();
    expect (await alert.smallModalContent(smallModalContent).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed small Modals Close Button$/, async () => {
    await alert.smallModalButtonClose.waitForDisplayed();
    expect (await alert.smallModalButtonClose.isDisplayed()).is.equal(true);
});

When(/^I click on small Modals Close Button$/, async () => {
    await alert.smallModalButtonClose.click();
});

Then(/^I expect to displayed large Modals Button "(.*)"$/, async (largeModalButton) => {
    await alert.largeModalButton(largeModalButton).waitForDisplayed();
    expect (await alert.largeModalButton(largeModalButton).isDisplayed()).is.equal(true);
});

When(/^I click on large Modals Button "(.*)"$/, async (largeModalButton) => {
    await alert.largeModalButton(largeModalButton).click();
});

Then(/^I expect to displayed large Modals Window$/, async () => {
    await alert.largeModalWindow.waitForDisplayed();
    expect (await alert.largeModalWindow.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed large Modals Close Button$/, async () => {
    await alert.largeModalButtonClose.waitForDisplayed();
    expect (await alert.largeModalButtonClose.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed large Modal Content "(.*)"$/, async (largeModalContent) => {
    await alert.largeModalContent(largeModalContent).waitForDisplayed();
    expect (await alert.largeModalContent(largeModalContent).isDisplayed()).is.equal(true);
});

When(/^I click on large Modals Close Button$/, async () => {
    await alert.largeModalButtonClose.click();
    await browser.pause(1000);  

});









