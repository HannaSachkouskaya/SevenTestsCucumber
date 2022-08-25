const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const interections = require('../pageobjects/interections.page');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa6$/, async () => {
    await browser.url(`https://demoqa.com/`);
    
});

Then(/^I expect home page6 is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Interection Button "(.*)"$/, async (interactionsButton) => {
    await interections.interectionsButton(interactionsButton).waitForDisplayed();
    expect (await interections.interectionsButton(interactionsButton).isDisplayed()).is.equal(true);
    
});

When(/^I scroll on Interection Button "(.*)"$/, async (interactionsButton) => {
    await interections.interectionsButton(interactionsButton).scrollIntoView();
   
});

Then(/^I expect that Interection Button is clickable "(.*)"$/, async (interactionsButton) => {
    await interections.interectionsButton(interactionsButton).isClickable();
  
});

When(/^I click on Interection Button "(.*)"$/, async (interactionsButton) => {
    await interections.interectionsButton(interactionsButton).click();
});

Then(/^I expect to displayed Sortable Button "(.*)"$/, async (sortableButton) => {
    await interections.sortableButton(sortableButton).waitForDisplayed();
    expect (await interections.sortableButton(sortableButton).isDisplayed()).is.equal(true);
    
});

When(/^I scroll on Sortable Button "(.*)"$/, async (sortableButton) => {
    await interections.sortableButton(sortableButton).scrollIntoView();
   
});

Then(/^I expect that Sortable Button is clickable "(.*)"$/, async (sortableButton) => {
    await interections.sortableButton(sortableButton).isClickable();
});

When(/^I click on Sortable Button "(.*)"$/, async (sortableButton) => {
    await interections.sortableButton(sortableButton).click();
});

Then(/^I expect to displayed List Tab "(.*)"$/, async (listTab) => {
    await interections.listTab(listTab).waitForDisplayed();
    expect (await interections.listTab(listTab).isDisplayed()).is.equal(true);
});

Then(/^I scroll on two Element$/, async () => {
    await interections.twoElement.scrollIntoView();
});

When(/^I dragAndDrow One Element$/, async () => {
    const elem = await $('//div[contains(text(), "One")]')
    const target = await $('//div[contains(text(), "Two")]')
    await elem.dragAndDrop(target)
});

Then(/^I expect to displayed Grid Tab "(.*)"$/, async (gridTab) => {
    await interections.gridTab(gridTab).waitForDisplayed();
    expect (await interections.gridTab(gridTab).isDisplayed()).is.equal(true);
});

Then(/^I expect that Grid Tab is clickable "(.*)"$/, async (gridTab) => {
    await interections.gridTab(gridTab).isClickable();
});

When(/^I click on Grid Tab "(.*)"$/, async (gridTab) => {
    await interections.gridTab(gridTab).click();
   
});

Then(/^I expect to Seven Element$/, async () => {
    await interections.sevenElement.waitForDisplayed();
    expect (await interections.sevenElement.isDisplayed()).is.equal(true);
});

When(/^I scroll on Seven Element$/, async () => {
    await interections.sevenElement.scrollIntoView();
    await browser.pause(1000);
});

When(/^I dragAndDrow seven Element$/, async () => {
    const sevenElem = await $('//div[contains(text(), "Seven")]')
    const targetEight = await $('//div[contains(text(), "Eight")]')
    await sevenElem.dragAndDrop(targetEight)
    await browser.pause(1000);
});

When(/^I scroll up Page$/, async () => {
    await browser.keys(['Ctrl', 'Home'])
    await homePage.home.click();
    await browser.pause(1000);
});

Then(/^I expect to displayed Page$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
    await browser.pause(1000);
});




















 