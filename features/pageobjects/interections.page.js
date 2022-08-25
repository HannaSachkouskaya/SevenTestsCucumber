class interections {
    
    interectionsButton(interactionsButton) {
        return $(`//h5[text()="${interactionsButton}"]`);
    }

    sortableButton(sortableButton) {
        return $(`//span[contains(text(), "${sortableButton}")]`);
    }

    listTab(listTab) {
        return $(`//a[text()="${listTab}"]`);
    }

    // get oneElement() {
    //     return $('//div[contains(text(), "One")]');
    // }

    // get twoElement() {
    //     return $('//div[contains(text(), "Two")]');
    // }

    gridTab(gridTab) {
        return $(`//a[text()="${gridTab}"]`);
    }

    get sevenElement() {
        return $('//div[contains(text(), "Seven")]');
    }

    // get eightElement() {
    //     return $('//div[contains(text(), "Eight")]');
    // }
    
        
    }
 module.exports = new interections();