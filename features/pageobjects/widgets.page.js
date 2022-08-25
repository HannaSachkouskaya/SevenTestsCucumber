class widgets {
    
    widgetsButton(widgetsButton) {
        return $(`//h5[text()="${widgetsButton}"]`);
    }

    widgetsTabButton(widgetsTabsButton) {
        return $(`//span[text()="${widgetsTabsButton}"]`);
    }

    widgetsWhatTab(whatTab) {
        return $(`//a[text()="${whatTab}"]`);
    }

    widgetsWhatTabContent(whatTabContent) {
        return $(`//p[text()="${whatTabContent}"]`);
    }

    widgetsOriginTab(originTab) {
        return $(`//a[text()="${originTab}"]`);
    }


    widgetsOriginContent(originContent) {
        return $(`//p[contains(text(),'${originContent}')]`);
    }

    widgetsUseTab(useTab) {
        return $(`//a[text()="${useTab}"]`);
    }

    widgetsUseTabContent(useTabContent) {
        return $(`//p[contains(text(),'${useTabContent}')]`);
    }

    widgetMenuButton(menuButton) {
        return $(`//span[text()="${menuButton}"]`);
    }

    widgetMainItem1(mainItem1) {
        return $(`//a[text()="${mainItem1}"]`);
    }

    widgetMainItem2(mainItem2) {
        return $(`//a[text()="${mainItem2}"]`);
    }

    widgetMainItem2SUB(subSubList) {
        return $(`//a[text()="${subSubList}"]`);
    }

    widgetMainItem2SUB1(subSubItem1) {
        return $(`//a[text()="${subSubItem1}"]`);
    }

    widgetMainItem3(mainItem3) {
        return $(`//a[text()="${mainItem3}"]`);
    }
        
    }
 module.exports = new widgets();