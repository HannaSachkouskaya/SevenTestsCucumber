const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');
// // // const textEmail = require('../pageobjects/login.Text.Email');
// // // const textPassword= require('../pageobjects/login.Text.Password');
// // // const mailPage=require('../pageobjects/creat.Mail.js');
const draftMail = require('../pageobjects/draft.Mail')
// // // const sentFolderButton = require ('../pageobjects/sent.Folder');

// // Given(/^I am on the login page for yahoo$/, async () => {
// //     await browser.url(`https://mail.yahoo.com/`)
// // });

// // Then(/^I expect SingIn is displayed$/, async () => {
// //     await textEmail.signInButton.waitForDisplayed();
// //     expect (await textEmail.signInButton.isDisplayed()).is.equal(true);
// // });

// // When(/^I click on SingIn button$/, async () => {
// //     await textEmail.signInButton.click();
// // });

// // When(/^I input login "(.*)"$/, async (login) => {
// //     await textEmail.login(login);
// // });

// // Then(/^I expect Next button is displayed$/, async () => {
// //     await textPassword.nextButton.waitForDisplayed();
// //     expect (await textPassword.nextButton.isDisplayed()).is.equal(true);
// // });

// // When(/^I click on Next button$/, async () => {
// //     await textPassword.nextButton.click();
// // });

// // When(/^I input password "(.*)"$/, async (loginpassword) => {
// //     await textPassword.loginPassword(loginpassword);
// // });

// // Then(/^I expect Next button password is displayed$/, async () => {
// //     await textPassword.nextButtonPassword.waitForDisplayed();
// //     expect (await textPassword.nextButtonPassword.isDisplayed()).is.equal(true);
// // });

// // When(/^I click on Next button password$/, async () => {
// //     await textPassword.nextButtonPassword.click();
// // });

// // Then(/^I am in account$/, async () => {
// //     await textPassword.accountName.waitForDisplayed();
// //     expect (await textPassword.accountName.isDisplayed()).is.equal(true);
// // });

// // Then(/^I expect Mail button is displayed$/, async () => {
// //     await mailPage.buttonMail.waitForDisplayed();
// //     expect (await mailPage.buttonMail.isDisplayed()).is.equal(true);
// // });

// // When(/^I click on Mail button$/, async () => {
// //     await mailPage.buttonMail.click();
// // });

// // Then(/^I expect toField is displayed$/, async () => {
// //     await mailPage.toField.waitForDisplayed();
// //     expect (await mailPage.toField.isDisplayed()).is.equal(true);
// // });

// // Then(/^I expect subjectField is displayed$/, async () => {
// //     await mailPage.toSubject.waitForDisplayed();
// //     expect (await mailPage.toSubject.isDisplayed()).is.equal(true);
// // });

// // Then(/^I expect bodyField is displayed$/, async () => {
// //     await mailPage.toBodyText.waitForDisplayed();
// //     expect (await mailPage.toBodyText.isDisplayed()).is.equal(true);
// // });

// // When(/^I fill in mail "(.*)" and (.+) and (.+)$/, async (toField,subject,body) => {
// //     await mailPage.inputEmail(toField,subject,body); 
// // });

// // Then(/^I expect mail matches pattern "(.*)"$/, async (regex) => {
// //     const emailAddres=await mailPage.toFieldMail.getText(); 
// //     const pattern=new RegExp(regex);
// //     const isMatch=pattern.test(emailAddres);
// //     expect(isMatch).is.equal(true);
// // });

When(/^I click on Draft folder$/, async () => {
    await draftMail.folderDraft.click();
});

When(/^I click on "(.*)" in draft$/, async (mailInDraft) => {
    await draftMail.mailInDraft(mailInDraft).click(); 
});

Then(/^I expect "(.*)" in draft is displayed$/, async (toField) => {
    await draftMail.draftMailAdress(toField).waitForDisplayed();
    expect (await draftMail.draftMailAdress(toField).isDisplayed()).is.equal(true);
});

Then(/^I expect subject in draft is diaplayed$/, async () => {
    await draftMail.draftMailSubject.waitForDisplayed();
    expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(true);
});

Then(/^I expect body in draft is displayed$/, async () => {
    await draftMail.draftMailText.waitForDisplayed();
    expect (await draftMail.draftMailText.isDisplayed()).is.equal(true);
});

When(/^I click on Sent button$/, async () => {
    await draftMail.buttonSent.click(); 
});

Then(/^I expect Draft folder is displayed$/, async () => {
    await draftMail.folderDraft.waitForDisplayed();
    expect (await draftMail.folderDraft.isDisplayed()).is.equal(true);
}); 

When(/^I click on emptyDraft folder$/, async () => {
    await draftMail.folderDraft.click();
}); 

Then(/^I expect "(.*)" in draft is NOT displayed$/, async (notToField) => {
    expect (await draftMail.draftMailAdress(notToField).isDisplayed()).is.equal(false);
}); 

Then(/^I expect subject in draft is NOT displayed$/, async () => {
    await expect (await draftMail.draftMailSubject.isDisplayed()).is.equal(false);
}); 

Then(/^I expect body in draft is NOT displayed$/, async () => {
    await expect (await draftMail.draftMailText.isDisplayed()).is.equal(false);
}); 

// // Then(/^I expect sent folder is displayed$/, async () => {
// //     await sentFolderButton.sentPage.waitForDisplayed();
// //     expect (await sentFolderButton.sentPage.isDisplayed()).is.equal(true);
// // }); 

// // When(/^I click on sent folder$/, async () => {
// //     await sentFolderButton.sentPage.click();
// // }); 

// // Then(/^I expect "(.*)" Mail in sent folder$/, async (email) => {
// //     await sentFolderButton.mailInSentFolder(email).waitForDisplayed();
// //     expect (await sentFolderButton.mailInSentFolder(email).isDisplayed()).is.equal(true);
// // }); 

// // Then(/^I expect accout name is displayed$/, async () => {
// //     await textPassword.accountName.waitForDisplayed();
// //     expect (await textPassword.accountName.isDisplayed()).is.equal(true);
// // });

// // When(/^I move on to log off button$/, async () => {
// //     await textPassword.accountName.moveTo();
// // });

// // Then(/^I expect to log off button is displayed$/, async () => {
// //     await textPassword.logOffButton.waitForDisplayed();
// //     expect (await textPassword.logOffButton.isDisplayed()).is.equal(true);
// // });

// // When(/^I click on to log off button$/, async () => {
// //     await textPassword.logOffButton.click();
// // });

