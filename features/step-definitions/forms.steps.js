const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
const forms = require('../pageobjects/forms.page');
const dateBirht=require('../pageobjects/forms.dateBirth.page');
const subject=require('../pageobjects/forms.subject.page');
const homePage = require('../pageobjects/home.page');

Given(/^I am on the home page demoqa3$/, async () => {
    await browser.url(`https://demoqa.com/`);
 
});

Then(/^I expect home page3 is displayed$/, async () => {
    await homePage.home.waitForDisplayed();
    expect (await homePage.home.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Forms Button "(.*)"$/, async (formButton) => {
    await forms.formsButton(formButton).waitForDisplayed();
    expect (await forms.formsButton(formButton).isDisplayed()).is.equal(true);
});

When(/^I scroll Forms Button "(.*)"$/, async (formButton) => {
    await forms.formsButton(formButton).scrollIntoView();
});

When(/^I click on Forms button "(.*)"$/, async (formButton) => {
    await forms.formsButton(formButton).click();
});

Then(/^I expect to displayed Practice Form Button "(.*)"$/, async (practiceFormButton) => {
    await forms.practiceFormButton(practiceFormButton).waitForDisplayed();
    expect (await forms.practiceFormButton(practiceFormButton).isDisplayed()).is.equal(true);
});

When(/^I click on Practice Form Button "(.*)"$/, async (practiceFormButton) => {
    await forms.practiceFormButton(practiceFormButton).click();
});

Then(/^I expect to displayed First Name field$/, async () => {
    await forms.firstNameField.waitForDisplayed();
    expect (await forms.firstNameField.isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Last Name field$/, async () => {
    await forms.lastNameField.waitForDisplayed();
    expect (await forms.lastNameField.isDisplayed()).is.equal(true);
});



Then(/^I expect to displayed formEmail field$/, async () => {
    await forms.emailField.waitForDisplayed();
    expect (await forms.emailField.isDisplayed()).is.equal(true);

});

Then(/^I expect to displayed Mobile field$/, async () => {
    await forms.mobileField.waitForDisplayed();
    expect (await forms.mobileField.isDisplayed()).is.equal(true);

});

Then(/^I expect to displayed formCurrent Address field$/, async () => {
        await forms.currentAddressField.waitForDisplayed();
        expect (await forms.currentAddressField.isDisplayed()).is.equal(true);
    });

When(/^I input "(.*)" and "(.*)" and "(.*)" and "(.*)" and "(.*)" fields$/, async (firstName,lastName,email,mobile, currentAddress) => {
    await forms.fillInFormFields(firstName,lastName,email,mobile,currentAddress); 
   
});

Then(/^I expect to displayed Subjects field "(.*)"$/, async (subjectsItem) => {
    await subject.subjectField(subjectsItem).waitForDisplayed();
    expect (await subject.subjectField(subjectsItem).isDisplayed()).is.equal(true);
    await browser.pause(1000);
});

Then(/^I expect to displayed Subjects field Fill In$/, async () => {
    await subject.subjectFieldFillIn.waitForDisplayed();
    expect (await subject.subjectFieldFillIn.isDisplayed()).is.equal(true);
});

Then(/^I expect that Subjects field is enabled$/, async () => {
    await subject.subjectFieldFillIn.isEnabled();
        
});

When(/^I click on Subjects field$/, async () => {
    await subject.subjectFieldFillIn.click();
   
});

When(/^I type Subjects field "(.*)"$/, async (subjectForm) => {
    await subject.fillInFormSubjectField(subjectForm); 
    
}); 

When(/^I click on enter key on Subjects field$/, async () => {
    await browser.keys(['Enter'])
 
});


When(/^I scroll on Gender radiobutton "(.*)"$/, async (genderItem) => {
    await forms.genderField(genderItem).scrollIntoView();
});

Then(/^I expect to displayed Gender radiobuttoms "(.*)"$/, async (genderItem) => {
    await forms.genderField(genderItem).waitForDisplayed();
    expect (await forms.genderField(genderItem).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Male radiobuttom "(.*)"$/, async (maleRadioButton) => {
    await forms.genderMaleField(maleRadioButton).waitForDisplayed();
    expect (await forms.genderMaleField(maleRadioButton).isDisplayed()).is.equal(true);
});

When(/^I click on Male radiobutton "(.*)"$/, async (maleRadioButton) => {
    await forms.genderMaleField(maleRadioButton).click();
});

Then(/^I expect to displayed Date of Birth field$/, async () => {
    await dateBirht.birhtField.waitForDisplayed();
    expect (await dateBirht.birhtField.isDisplayed()).is.equal(true);
});

When(/^I click on Date of Birth field$/, async () => {
    await dateBirht.birhtField.click();
});

When(/^I select "(.*)" on popUpMounth$/, async (mounth) => {
    await dateBirht.mounthSelectButton.selectByVisibleText(mounth);
});

When(/^I select "(.*)" on popUpYear$/, async (year) => {
    await dateBirht.yearSelectButton.selectByVisibleText(year);
});

When(/^I select "(.*)" on popUpDate$/, async (date) => {
    await dateBirht.dateSelectButton(date).click(); 
});

Then(/^I expect to displayed hobbiedSports "(.*)"$/, async (sportsRadioButton) => {
    await forms.hobbiesSportsRadiobutton(sportsRadioButton).waitForDisplayed();
    expect (await forms.hobbiesSportsRadiobutton(sportsRadioButton).isDisplayed()).is.equal(true);
});

When(/^I click on hobbiedSports "(.*)"$/, async (sportsRadioButton) => {
    await forms.hobbiesSportsRadiobutton(sportsRadioButton).click();
});


When(/^I uploadFile$/, async () => {
    const remoteFilePath = await browser.uploadFile("tree.jpg");
    await forms.chooseFile.setValue(remoteFilePath);
});

When(/^I click on Current Address field$/, async () => {
    await forms.currentAddressField.click();
    
});

When(/^I click on Tab button on Current Address field$/, async () => {
    await browser.keys(['Tab'])
  
});

When(/^I click on Tab button on State and City field$/, async () => {
    await browser.keys(['Tab'])

});

When(/^I click on Enter formSubmit Button$/, async () => {
    await browser.keys(['Enter'])
    
});


Then(/^I expect to displayed Student Name field "(.*)"$/, async (fNamelName) => {
    await forms.studentNameField(fNamelName).waitForDisplayed();
    expect (await forms.studentNameField(fNamelName).isDisplayed()).is.equal(true);
});


Then(/^I expect to displayed Student Email field "(.*)"$/, async (eMail) => {
    await forms.studentEmailField(eMail).waitForDisplayed();
    expect (await forms.studentEmailField(eMail).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Gender In Submmiting field "(.*)"$/, async (genderIn) => {
    await forms.genderFieldInSubmmiting(genderIn).waitForDisplayed();
    expect (await forms.genderFieldInSubmmiting(genderIn).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Mobile field "(.*)"$/, async (mobile) => {
    await forms.mobileFieldForm(mobile).waitForDisplayed();
    expect (await forms.mobileFieldForm(mobile).isDisplayed()).is.equal(true);
});


When(/^I click on Tab Thanks for submitting$/, async () => {
    await browser.keys(['Tab'])
    
});

Then(/^I expect to displayed Subject in Form field "(.*)"$/, async (subjectInForm) => {
    await forms.subjectFieldInSubmittingForm(subjectInForm).waitForDisplayed();
    expect (await forms.subjectFieldInSubmittingForm(subjectInForm).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Hobbies field "(.*)"$/, async (hobbies) => {
    await forms.sportField(hobbies).waitForDisplayed();
    expect (await forms.sportField(hobbies).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Picture field "(.*)"$/, async (fail) => {
    await forms.addressField(fail).waitForDisplayed();
    expect (await forms.addressField(fail).isDisplayed()).is.equal(true);
});

Then(/^I expect to displayed Current Address field "(.*)"$/, async (currentAddress) => {
    await forms.addressField(currentAddress).waitForDisplayed();
    expect (await forms.addressField(currentAddress).isDisplayed()).is.equal(true);
});

When(/^I click on Close Button$/, async () => {
    await browser.keys(['Enter'])
   
});






















