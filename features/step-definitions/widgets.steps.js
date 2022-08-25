const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const widgets = require('../pageobjects/widgets.page');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa5$/, async () => {
    await browser.url(`https://demoqa.com/`);
    
});

Then(/^I expect home page5 is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});


Then(/^I expect to displayed Widgets Button "(.*)"$/, async (widgetsButton) => {
    await widgets.widgetsButton(widgetsButton).waitForDisplayed();
    expect (await widgets.widgetsButton(widgetsButton).isDisplayed()).is.equal(true);
    
});

When(/^I scroll on Widgets Button "(.*)"$/, async (widgetsButton) => {
    await widgets.widgetsButton(widgetsButton).scrollIntoView();
    
});

When(/^I expect that Widgets Button is clickable "(.*)"$/, async (widgetsButton) => {
    await widgets.widgetsButton(widgetsButton).isClickable();
});


When(/^I click on Widgets Button "(.*)"$/, async (widgetsButton) => {
    await widgets.widgetsButton(widgetsButton).click();
});

Then(/^I expect to displayed Tab Button "(.*)"$/, async (widgetsTabsButton) => {
    await widgets.widgetsTabButton(widgetsTabsButton).waitForDisplayed();
    expect (await widgets.widgetsTabButton(widgetsTabsButton).isDisplayed()).is.equal(true);
    
});

When(/^I scroll on Tab Button "(.*)"$/, async (widgetsTabsButton) => {
    await widgets.widgetsTabButton(widgetsTabsButton).scrollIntoView();
    
});

Then(/^I expect that Tab Button is clickable "(.*)"$/, async (widgetsTabsButton) => {
    await widgets.widgetsTabButton(widgetsTabsButton).isClickable();
});

When(/^I click on Tab Button "(.*)"$/, async (widgetsTabsButton) => {
    await widgets.widgetsTabButton(widgetsTabsButton).click();
});

Then(/^I expect to displayed What Tab "(.*)"$/, async (whatTab) => {
    await widgets.widgetsWhatTab(whatTab).waitForDisplayed();
    expect (await widgets.widgetsWhatTab(whatTab).isDisplayed()).is.equal(true);
});

When(/^I expect that What Tab is clickable "(.*)"$/, async (whatTab) => {
    await widgets.widgetsWhatTab(whatTab).isClickable();
});

When(/^I click on What Tab "(.*)"$/, async (whatTab) => {
    await widgets.widgetsWhatTab(whatTab).click();
});

Then(/^I expect to displayed What Tab Content "(.*)"$/, async (whatTabContent) => {
    await widgets.widgetsWhatTabContent(whatTabContent).waitForDisplayed();
    expect (await widgets.widgetsWhatTabContent(whatTabContent).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Origin Tab "(.*)"$/, async (originTab) => {
    await widgets.widgetsOriginTab(originTab).waitForDisplayed();
    expect (await widgets.widgetsOriginTab(originTab).isDisplayed()).is.equal(true);
});

When(/^I expect that Origin Tab is clickable "(.*)"$/, async (originTab) => {
    await widgets.widgetsOriginTab(originTab).isClickable();
});

When(/^I click on Origin Tab "(.*)"$/, async (originTab) => {
    await widgets.widgetsOriginTab(originTab).click();
});


Then(/^I expect to displayed Origin Tab Content "(.*)"$/, async (originContent) => {
    await widgets.widgetsOriginContent(originContent).waitForDisplayed();
    expect (await widgets.widgetsOriginContent(originContent).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Use Tab "(.*)"$/, async (useTab) => {
    await widgets.widgetsUseTab(useTab).waitForDisplayed();
    expect (await widgets.widgetsUseTab(useTab).isDisplayed()).is.equal(true);
});

Then(/^I expect that Use Tab is clickable "(.*)"$/, async (useTab) => {
    await widgets.widgetsUseTab(useTab).isClickable();
});

When(/^I click on Use Tab "(.*)"$/, async (useTab) => {
    await widgets.widgetsUseTab(useTab).click();
});

Then(/^I expect to displayed Use Tab Content "(.*)"$/, async (useTabContent) => {
    await widgets.widgetsUseTabContent(useTabContent).waitForDisplayed();
    expect (await widgets.widgetsUseTabContent(useTabContent).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Menu Button "(.*)"$/, async (menuButton) => {
    await widgets.widgetMenuButton(menuButton).waitForDisplayed();
    expect (await widgets.widgetMenuButton(menuButton).isDisplayed()).is.equal(true);
});

When(/^I scroll on Menu Button "(.*)"$/, async (menuButton) => {
    await widgets.widgetMenuButton(menuButton).scrollIntoView();
    
});

Then(/^I expect that Menu Button is clickable "(.*)"$/, async (menuButton) => {
    await widgets.widgetMenuButton(menuButton).isClickable();
});

When(/^I click on Menu Button "(.*)"$/, async (menuButton) => {
    await widgets.widgetMenuButton(menuButton).click();
});

When(/^I scroll Main Item "(.*)"$/, async (mainItem1) => {
    await widgets.widgetMainItem1(mainItem1).scrollIntoView();
      
})

Then(/^I expect to displayed Main Item 1 "(.*)"$/, async (mainItem1) => {
    await widgets.widgetMainItem1(mainItem1).waitForDisplayed();
    expect (await widgets.widgetMainItem1(mainItem1).isDisplayed()).is.equal(true);
});

Then(/^I expect that Main Item 1 enabled "(.*)"$/, async (mainItem1) => {
    await widgets.widgetMainItem1(mainItem1).isEnabled();
});

When(/^I move to on Main Item 1 "(.*)"$/, async (mainItem1) => {
    await widgets.widgetMainItem1(mainItem1).moveTo();
   
});

Then(/^I expect to displayed Main Item 2 "(.*)"$/, async (mainItem2) => {
    await widgets.widgetMainItem2(mainItem2).waitForDisplayed();
    expect (await widgets.widgetMainItem2(mainItem2).isDisplayed()).is.equal(true);
});

Then(/^I expect that onMain Item 2 enabled "(.*)"$/, async (mainItem2) => {
    await widgets.widgetMainItem2(mainItem2).isEnabled();

});

When(/^I move to on Main Item 2 "(.*)"$/, async (mainItem2) => {
    await widgets.widgetMainItem2(mainItem2).moveTo();
      
});

Then(/^I expect to displayed Main Item 2 SUB "(.*)"$/, async (subSubList) => {
    await widgets.widgetMainItem2SUB(subSubList).waitForDisplayed();
    expect (await widgets.widgetMainItem2SUB(subSubList).isDisplayed()).is.equal(true);
});

Then(/^I expect that on Main Item 2 SUB enabled "(.*)"$/, async (subSubList) => {
    await widgets.widgetMainItem2SUB(subSubList).isEnabled();
    
});

When(/^I move to on Main Item 2 SUB "(.*)"$/, async (subSubList) => {
    await widgets.widgetMainItem2SUB(subSubList).moveTo();
      
});

Then(/^I expect to displayed Main Item 2 SUB 1 "(.*)"$/, async (subSubItem1) => {
    await widgets.widgetMainItem2SUB1(subSubItem1).waitForDisplayed();
    expect (await widgets.widgetMainItem2SUB1(subSubItem1).isDisplayed()).is.equal(true);
});

Then(/^I expect that on Main Item 2 SUB 1 enabled "(.*)"$/, async (subSubItem1) => {
    await widgets.widgetMainItem2SUB1(subSubItem1).isEnabled();
    
});

When(/^I move to on Main Item 2 SUB 1 "(.*)"$/, async (subSubItem1) => {
    await widgets.widgetMainItem2SUB1(subSubItem1).moveTo();
    
});

Then(/^I expect to displayed Main Item 3 "(.*)"$/, async (mainItem3) => {
    await widgets.widgetMainItem3(mainItem3).waitForDisplayed();
    expect (await widgets.widgetMainItem3(mainItem3).isDisplayed()).is.equal(true);
});

Then(/^I expect that on Main Item 3 "(.*)"$/, async (mainItem3) => {
    await widgets.widgetMainItem3(mainItem3).isEnabled();
    
});

When(/^I move to on Main Item 3 "(.*)"$/, async (mainItem3) => {
    await widgets.widgetMainItem3(mainItem3).moveTo();
    
});












 