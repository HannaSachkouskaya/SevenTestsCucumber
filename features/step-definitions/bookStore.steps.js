const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const bookStore = require('../pageobjects/bookStore.page');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa7$/, async () => {
    await browser.url(`https://demoqa.com/`);
    
});

Then(/^I expect home page7 is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Store Button "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).waitForDisplayed();
    expect (await bookStore.bookStoreButton(bookStoreApplicationButton).isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

When(/^I scroll on book Store Button "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).scrollIntoView();
    await browser.pause(1000);
});

Then(/^I expect that Store Button is clickable "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).isClickable();
    await browser.pause(1000);
});

When(/^I click on Store Button "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).click();
    await browser.pause(1000);
});

Then(/^I expect to displayed Git Pocket Bok$/, async () => {
    await bookStore.bookGitPocket.waitForDisplayed();
    expect (await bookStore.bookGitPocket.isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

Then(/^I expect that Git Pocket book is clickable$/, async () => {
    await bookStore.bookGitPocket.isClickable();
    await browser.pause(1000);
});

When(/^I click on Git Pocket book$/, async () => {
    await bookStore.bookGitPocket.click();
    await browser.pause(1000);
});

Then(/^I expect to displayed ISBN$/, async () => {
    await bookStore.itemISBN.waitForDisplayed();
    expect (await bookStore.itemISBN.isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

Then(/^I expect ISBN matches pattern "(.*)"$/, async (iSBNItem) => {
    const iSBN=await bookStore.itemISBN.getText(); 
    const pattern=new RegExp(iSBNItem);
    const isMatch=pattern.test(iSBN);
    expect(isMatch).is.equal(true);
});

When(/^I scroll up PageH$/, async () => {
    await browser.keys(['Ctrl', 'Home'])
    await homePage.home.click();
    await browser.pause(1000);
});

Then(/^I expect to displayed PageH$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
    await browser.pause(1000);
}); 

Then(/^I expect to displayed Store Button2 "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).waitForDisplayed();
    expect (await bookStore.bookStoreButton(bookStoreApplicationButton).isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

Then(/^I expect that book Store Button2 is clickable "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).isClickable();
    await browser.pause(1000);
});

When(/^I click on Store Button2 "(.*)"$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).click();
    await browser.pause(1000);
});

Then(/^I expect to displayed Search Field$/, async () => {
    await bookStore.searchField.waitForDisplayed();
    expect (await bookStore.searchField.isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

When(/^I click on Search Field$/, async () => {
    await bookStore.searchField.click();
    await browser.pause(1000);
});

When(/^I fill in Seach Field "(.*)"$/, async (seachBox) => {
    await bookStore.fillInSearchField(seachBox); 
});

Then(/^I expect to displayed Search Button$/, async () => {
    await bookStore.searchButton.waitForDisplayed();
    expect (await bookStore.searchButton.isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

When(/^I click on Search Button$/, async () => {
    await bookStore.searchButton.click();
    await browser.pause(1000);
});

When(/^I search four books JS on page$/, async () => {
    const text = await $('//div[@class="books-wrapper"]');
    console.log(await text.$$('//span[@class="mr-2"]')[2].$('//a[contains(text(), "JavaScript")]').getText());
    
});





















 