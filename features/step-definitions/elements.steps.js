const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const elements = require('../pageobjects/elements.page');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa2$/, async () => {
    await browser.url(`https://demoqa.com/`);
    // await expect(browser).toHaveTitle('ToolsQA');
});

Then(/^I expect home page2 is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Elements Button "(.*)"$/, async (elementsButton) => {
    await elements.elementsButton(elementsButton).waitForDisplayed();
    expect (await elements.elementsButton(elementsButton).isDisplayed()).is.equal(true);
});

When(/^I scroll Element Button "(.*)"$/, async (elementsButton) => {
    await elements.elementsButton(elementsButton).scrollIntoView();
   
});

Then(/^I expect Elements Button is clickable "(.*)"$/, async (elementsButton) => {
    await elements.elementsButton(elementsButton).isClickable();
});

When(/^I click on Elements Button "(.*)"$/, async (elementsButton) => {
        await elements.elementsButton(elementsButton).click();
        
});

Then(/^I expect to displayed TextBox button "(.*)"$/, async (textBoxButton) => {
    await elements.textBoxButton(textBoxButton).waitForDisplayed();
    expect (await elements.textBoxButton(textBoxButton).isDisplayed()).is.equal(true);
    
});

When(/^I click on TextBox button "(.*)"$/, async (textBoxButton) => {
    await elements.textBoxButton(textBoxButton).click();
    
});

Then(/^I expect to displayed fullName field$/, async () => {
    await elements.fullNameField.waitForDisplayed();
    expect (await elements.fullNameField.isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Email field$/, async () => {
    await elements.email.waitForDisplayed();
    expect (await elements.email.isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Current Address field$/, async () => {
    await elements.currentAddress.waitForDisplayed();
    expect (await elements.currentAddress.isDisplayed()).is.equal(true);
    
});


Then(/^I expect to displayed Permanent Address field$/, async () => {
    await elements.permanentAddress.waitForDisplayed();
    expect (await elements.permanentAddress.isDisplayed()).is.equal(true);
    
});

When(/^I fill in "(.*)" and "(.*)" and "(.*)" and "(.*)" fields$/, async (fullName,email,currentAddress,permanentAddress) => {
    await elements.fillInTextBoxes(fullName,email,currentAddress,permanentAddress); 
   
});

When(/^I scroll Submit button "(.*)"$/, async (submitButton) => {
    await elements.submitButton(submitButton).scrollIntoView();
});

When(/^I click on Submit button "(.*)"$/, async (submitButton) => {
    await elements.submitButton(submitButton).click();
    await browser.pause(5000);
    
});

Then(/^I expect to displayed Full Name "(.*)"$/, async (fullName) => {
    await elements.fullName(fullName).waitForDisplayed();
    expect (await elements.fullName(fullName).isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Mail "(.*)"$/, async (mailFillIn) => {
    await elements.emailFillIn(mailFillIn).waitForDisplayed();
    expect (await elements.emailFillIn(mailFillIn).isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Current Address Fill In "(.*)"$/, async (currentAd) => {
    await elements.currentAddressFillIn(currentAd).waitForDisplayed();
    expect (await elements.currentAddressFillIn(currentAd).isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Permanent Address "(.*)"$/, async (permanentAddress) => {
    await elements.permanentAddressFillIn(permanentAddress).waitForDisplayed();
    expect (await elements.permanentAddressFillIn(permanentAddress).isDisplayed()).is.equal(true);
    
});


When(/^I click on Buttons button "(.*)"$/, async (buttonButton) => {
    await elements.buttonsButton(buttonButton).click();
    
});

Then(/^I expect to displayed Double click button "(.*)"$/, async (doubleClickMeButton) => {
    await elements.doubleClickButton(doubleClickMeButton).waitForDisplayed();
    expect (await elements.doubleClickButton(doubleClickMeButton).isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Right click button "(.*)"$/, async (rightClickMeButton) => {
    await elements.rightClickButton(rightClickMeButton).waitForDisplayed();
    expect (await elements.rightClickButton(rightClickMeButton).isDisplayed()).is.equal(true);
    
});

Then(/^I expect to displayed Click button "(.*)"$/, async (buttonName) => {
    await elements.clickMeButtom(buttonName).waitForDisplayed();
    expect (await elements.clickMeButtom(buttonName).isDisplayed()).is.equal(true);
    
});

Then(/^I expect that Double click button is clickable "(.*)"$/, async (doubleClickMeButton) => {
    await elements.doubleClickButton(doubleClickMeButton).isClickable();
        
});

When(/^I click on Double click button "(.*)"$/, async (doubleClickMeButton) => {
    await elements.doubleClickButton(doubleClickMeButton).doubleClick();
    // await browser.pause(2000);
});

Then(/^I expect to displayed Double click button Fill In "(.*)"$/, async (doneDoubleClick) => {
    await elements.doubleClickButtonFillIn(doneDoubleClick).waitForDisplayed();
    expect (await elements.doubleClickButtonFillIn(doneDoubleClick).isDisplayed()).is.equal(true);
    
});

Then(/^I expect that rightClickButton is clickable "(.*)"$/, async (rightClickMeButton) => {
    await elements.rightClickButton(rightClickMeButton).isClickable();
        
});

When(/^I rightclick on rightClickButton "(.*)"$/, async (rightClickMeButton) => {
    await elements.rightClickButton(rightClickMeButton).click({button:'right'});
    // await browser.pause(2000);
});

Then(/^I expect to displayed Right Click Button Fill In "(.*)"$/, async (doneRightClick) => {
    await elements.rightClickButtonFillIn(doneRightClick).waitForDisplayed();
    expect (await elements.rightClickButtonFillIn(doneRightClick).isDisplayed()).is.equal(true);
   
});

When(/^I scroll clickButton "(.*)"$/, async (buttonName) => {
    await elements.clickMeButtom(buttonName).scrollIntoView();
    
});

Then(/^I expect that clickButton is clickable "(.*)"$/, async (buttonName) => {
    await elements.clickMeButtom(buttonName).isClickable();
        
});

When(/^I click on Click Me Button "(.*)"$/, async (buttonName) => {
    await elements.clickMeButtom(buttonName).click();
   
});

Then(/^I expect to displayed Click Me Button Fill In "(.*)"$/, async (doneDynamicClick) => {
    await elements.clickMeButtonFillIn(doneDynamicClick).waitForDisplayed();
    expect (await elements.clickMeButtonFillIn(doneDynamicClick).isDisplayed()).is.equal(true);
   
});











