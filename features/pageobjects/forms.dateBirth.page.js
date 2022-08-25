class dateBirht {
    
    get birhtField() {
        return $('//input[@id="dateOfBirthInput"]');
    } 

    get mounthSelectButton() {
        return $('//select[@class="react-datepicker__month-select"]');
    } 

    get yearSelectButton() {
        return $('//select[@class="react-datepicker__year-select"]');
    }   
    
    dateSelectButton(date) {
        return $(`//div[text()=${date}]`);
    }       


    }
 module.exports = new dateBirht();