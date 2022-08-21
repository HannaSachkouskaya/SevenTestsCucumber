class sentFolderButton {
    
    get sentPage () {
        return $('//span[@data-test-folder-name="Sent"]');
    }

    mailInSentFolder(email) {
        return $(`//span[text()="${email}"]`);
    }
    
     }
 module.exports = new sentFolderButton();