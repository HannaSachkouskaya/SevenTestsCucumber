class draftMail {
    
    get folderDraft() {
        return $('//span[text()="Drafts"]');
    }

    mailInDraft(mailInDraft) {
        return $(`//span[text()="${mailInDraft}"]`);
    }

    draftMailAdress(mailToField) {
        return $(`//div[text()="${mailToField}"]`);
    }

    get draftMailSubject() {
        return $('//input[@aria-label="Subject"]');
    }

    get draftMailText() {
        return $('//div[@dir="ltr"]');
    }
    
    get buttonSent() {
        return $('//button[@title="Send this email"]');
    }
   }
 module.exports = new draftMail();