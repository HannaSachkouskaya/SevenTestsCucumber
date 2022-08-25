const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const verifyBook = require('../pageobjects/verifyBook.page');
const homePage = require('../pageobjects/home.page');
const bookStore = require('../pageobjects/bookStore.page');

Given(/^I am on the home page demoq$/, async () => {
    await browser.url(`https://demoqa.com/`);
    
});

Then(/^I expect home page is displayed1$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});


When(/^I scroll "(.*)" button$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).scrollIntoView();
    
});

When(/^I click on "(.*)" button$/, async (bookStoreApplicationButton) => {
    await bookStore.bookStoreButton(bookStoreApplicationButton).click();

});

Then(/^I expect to displayed Search Field1$/, async () => {
    await bookStore.searchField.waitForDisplayed();
    expect (await bookStore.searchField.isDisplayed()).is.equal(true);
    
});

When(/^I click on Search Field1$/, async () => {
    await bookStore.searchField.click();
   
});

When(/^I fill in Seach Field1 "(.*)"$/, async (seachBox) => {
    await bookStore.fillInSearchField(seachBox); 
});

Then(/^I expect to displayed Search Button1$/, async () => {
    await bookStore.searchButton.waitForDisplayed();
    expect (await bookStore.searchButton.isDisplayed()).is.equal(true);
   
});

When(/^I click on Search Button1$/, async () => {
    await bookStore.searchButton.click();
    
});

When(/^I search four books JS on page1$/, async () => {
    const text = await $('//div[@class="books-wrapper"]');
    console.log(await text.$$('//span[@class="mr-2"]')[2].$('//a[contains(text(), "JavaScript")]').getText());
    
});

When(/^I scroll "(.*)" book$/, async (title1) => {
    await  verifyBook.titleBook1(title1).scrollIntoView(); 

});

When(/^I open "(.*)" book$/, async (title1) => {
    await verifyBook.titleBook1(title1).click();
    await browser.pause(2000);
});

Then(/^I expect to displayed book with "(.*)" Sub Title$/, async (subTitle1) => {
    await verifyBook.subTitle1(subTitle1).waitForDisplayed();
    expect (await verifyBook.subTitle1(subTitle1).isDisplayed()).is.equal(true);
    await browser.pause(2000);
});












