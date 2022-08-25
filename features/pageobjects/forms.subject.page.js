class subject {
    
    get subjectFieldFillIn() {
        return $('//input[@id="subjectsInput"]');
    } 

    subjectField(subjectsItem) {
        return $(`//label[text()="${subjectsItem}"]`);
    } 

            
    async fillInFormSubjectField(subjectForm) {
        await this.subjectFieldFillIn.setValue(subjectForm);
      
    }

       

}
 module.exports = new subject();