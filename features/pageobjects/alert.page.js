class alert {
    
    alertButton(alertbutton) {
        return $(`//h5[text()="${alertbutton}"]`);
    }

    browserWindowsButton(browsWindow) {
        return $(`//span[text()="${browsWindow}"]`);
    }

    newTabButton(newTab) {
        return $(`//button[text()="${newTab}"]`);
    }

    switchNewTabContent(newTabContent) {
        return $(`//h1[text()="${newTabContent}"]`);
    }

    newTabText(sampleText) {
        return $(`//h1[text()="${sampleText}"]`);
    }


    newWindowButton(newWindow) {
        return $(`//button[text()="${newWindow}"]`);
    }

    newWindowContent(newWindowContent) {
        return $(`//h1[text()="${newWindowContent}"]`);
    }

    modalDialogsButton(modalDialogsButton) {
        return $(`//span[contains(text(), "${modalDialogsButton}")]`);
    }

    smallModalButton(smallModalButton) {
        return $(`//button[text()="${smallModalButton}"]`);
    }

    get smallModalWindow() {
        return $('//div[@id="example-modal-sizes-title-sm"]');
    }

    smallModalContent(smallModalContent) {
        return $(`//div[text()="${smallModalContent}"]`);
    }

    get smallModalButtonClose() {
        return $('//button[@id="closeSmallModal"]');
    }

    largeModalButton(largeModalButton) {
        return $(`//button[text()="${largeModalButton}"]`);
    }

    get largeModalWindow() {
        return $('//div[text()="Large Modal"]');
    }

    largeModalContent(largeModalContent) {
        return $(`//p[text()="${largeModalContent}"]`);
    }

    get largeModalButtonClose() {
        return $('//button[@id="closeLargeModal"]');
    }

         
    }
 module.exports = new alert();