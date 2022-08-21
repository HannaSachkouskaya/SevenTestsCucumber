class mailPage {
    
    get buttonMail() {
        return $('//a[@data-test-id="compose-button"]');
    }

    get toField() {
        return $('//input[@id="message-to-field"]');
    }

    get toFieldMail() {
        return $('//div[@data-test-id="pill-text"]');
    }
     
    get toSubject() {
        return $('//input[@data-test-id="compose-subject"]');
    }

    get toBodyText() {
        return $('//div[@aria-label="Message body"]');
    }

    async inputEmail (field, subject, bodyText) {
        await this.toField.setValue(field);
        await this.toSubject.setValue(subject);
        await this.toBodyText.setValue(bodyText);
        
    }
    
} 
 
   
 module.exports = new mailPage();