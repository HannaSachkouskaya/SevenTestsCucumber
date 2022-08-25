class verifyBook {
    
    titleBook1(title1) {
        return $(`//a[text()="${title1}"]`);
    }

    subTitle1(subTitle1) {
        return $(`//label[text()="${subTitle1}"]`);
    }

    bookPage(bookPage) {
        return $(`//div[text()="${bookPage}"]`);
    }
        
    }
 module.exports = new verifyBook();