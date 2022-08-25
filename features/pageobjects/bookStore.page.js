class bookStore {
    
    bookStoreButton(bookStoreApplicationButton) {
        return $(`//h5[contains(text(), "${bookStoreApplicationButton}")]`);
    }

    
    get bookGitPocket() {
        return $(`//span[@id="see-book-Git Pocket Guide"] `);
    }

    get itemISBN() {
        return $('//label[contains(text(), "9781449325862")]');
    }

    get searchField() {
        return $('//input[@id="searchBox"]');
    }

    get allBooks() {
        return $('//div[@class="books-wrapper"]');
    }

    get searchButton() {
        return $('//span[@id="basic-addon2"]');
    }

    async fillInSearchField (seachBox) {
        await this.searchField.setValue(seachBox);
               
    }
     
        
    }
 module.exports = new bookStore();