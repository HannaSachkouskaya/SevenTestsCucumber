class forms {
    
    formsButton(formButton) {
        return $(`//h5[text()="${formButton}"]`);
    }

    practiceFormButton(practiceFormButton) {
        return $(`//span[text()="${practiceFormButton}"]`);
    }
   
    get firstNameField() {
        return $('//input[@id="firstName"]');
    }

    get lastNameField() {
        return $('//input[@id="lastName"]');
    }   
    
    get emailField() {
        return $('//input[@id="userEmail"]');
    } 

    genderField(genderItem) {
        return $(`//div[text()="${genderItem}"]`);
    } 

    genderMaleField(maleRadioButton) {
        return $(`//label[text()="${maleRadioButton}"]`);
    }

    get mobileField() {
        return $('//input[@id="userNumber"]');
    } 

    get subjectField() {
        return $('//input[@id="subjectsInput"]');
    } 

    get currentAddressField() {
        return $('//textarea[@id="currentAddress"]');
    } 

    hobbiesSportsRadiobutton(sportsRadioButton) {
        return $(`//label[text()="${sportsRadioButton}"]`);
    }

    // formsSubmitButton(submitButton) {
    //     return $(`//button[text()="${submitButton}"]`);
    // }

    get chooseFile() {
        return $('//input[@id="uploadPicture"]');
    }

    studentNameField(fNamelName) {
        return $(`//td[contains(text(), "${fNamelName}")]`);
    }

    studentEmailField(eMail) {
        return $(`//td[text()="${eMail}"]`);
    }

    genderFieldInSubmmiting(genderIn) {
        return $(`//td[text()="${genderIn}"]`);
    }

    mobileFieldForm(mobile) {
        return $(`//td[text()="${mobile}"]`);
    }

    sportField(hobbies) {
        return $(`//td[text()="${hobbies}"]`);
    }

    addressField(currentAddress) {
        return $(`//td[text()="${currentAddress}"]`);
    }

    pictureField(fail) {
        return $(`//td[text()="${fail}"]`);
    }

    subjectFieldInSubmittingForm(subjectInForm) {
        return $(`//td[text()="${subjectInForm}"]`);
    }

          
    async fillInFormFields(firstName,lastName,email,mobile,currentAddress) {
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.emailField.setValue(email);
        await this.mobileField.setValue(mobile);
        await this.currentAddressField.setValue(currentAddress);
       
      
    }

   

    }
 module.exports = new forms();