class elements {
    
    elementsButton(elementsButton) {
        return $(`//h5[text()="${elementsButton}"]`);
    }

    textBoxButton(textBoxButton) {
        return $(`//span[text()="${textBoxButton}"]`);
    }
   
    get fullNameField() {
        return $('//input[@placeholder="Full Name"]');
    } 

    get email() {
        return $('//input[@placeholder="name@example.com"]');
    } 

    get currentAddress() {
        return $('//textarea[@id="currentAddress"]');
    } 

    get permanentAddress() {
        return $('//textarea[@id="permanentAddress"]');
    } 

    submitButton(submitButton) {
        return $(`//button[text()="${submitButton}"]`);
    } 

    fullName(fullName) {
        return $(`//p[text()="${fullName}"]`);
    }

    emailFillIn(mailFillIn) {
        return $(`//p[text()="${mailFillIn}"]`);
    } 

    currentAddressFillIn(currentAd) {
        return $(`//p[text()="${currentAd}"]`);
    } 

    permanentAddressFillIn(permanentAddress) {
        return $(`//p[text()="${permanentAddress}"]`);
    } 

    buttonsButton(buttonButton) {
        return $(`//span[text()="${buttonButton}"]`);
    } 

    doubleClickButton(doubleClickMeButton) {
        return $(`//button[text()="${doubleClickMeButton}"]`);
    } 

    rightClickButton(rightClickMeButton) {
        return $(`//button[text()="${rightClickMeButton}"]`);
    } 

    clickMeButtom(buttonName) {
        return $(`//button[text()="${buttonName}"]`);
    }

    doubleClickButtonFillIn(doneDoubleClick) {
        return $(`//p[text()="${doneDoubleClick}"]`);
    } 
    
    rightClickButtonFillIn(doneRightClick) {
        return $(`//p[text()="${doneRightClick}"]`);
    } 

    clickMeButtonFillIn(doneDynamicClick) {
        return $(`//p[text()="${doneDynamicClick}"]`);
    } 

    async fillInTextBoxes(fullName,email,currentAddress,permanentAddress) {
        await this.fullNameField.setValue(fullName);
        await this.email.setValue(email);
        await this.currentAddress.setValue(currentAddress);
        await this.permanentAddress.setValue(permanentAddress);
       }
      
    }
 module.exports = new elements();