Feature: The Internet Guinea Pig Website

  @test3
  Scenario: I am verify Forms item
    Given I am on the home page demoqa3
    Then I expect home page3 is displayed
    Then I expect to displayed Forms Button "Forms"
    When I scroll Forms Button "Forms"
    When I click on Forms button "Forms"
    Then I expect to displayed Practice Form Button "Practice Form"
    When I click on Practice Form Button "Practice Form"
    Then I expect to displayed First Name field
    Then I expect to displayed Last Name field
    Then I expect to displayed formEmail field
    Then I expect to displayed Mobile field
    Then I expect to displayed formCurrent Address field
    When I input "Hanna" and "AnnName" and "sannav1985@gmail.com" and "1234567890" and "Current Address" fields
    Then I expect to displayed Subjects field "Subjects"
    Then I expect to displayed Subjects field Fill In
    Then I expect that Subjects field is enabled
    When I click on Subjects field
    When I type Subjects field "english"
    When I click on enter key on Subjects field
    When I scroll on Gender radiobutton "Gender"
    Then I expect to displayed Gender radiobuttoms "Gender"
    Then I expect to displayed Male radiobuttom "Male"
    When I click on Male radiobutton "Male"
    Then I expect to displayed Date of Birth field
    When I click on Date of Birth field
    When I select "January" on popUpMounth
    When I select "1988" on popUpYear
    When I select "5" on popUpDate
    Then I expect to displayed hobbiedSports "Sports"
    When I click on hobbiedSports "Sports"
    When I uploadFile
    When I click on Current Address field
    When I click on Tab button on Current Address field
    When I click on Tab button on State and City field
    When I click on Enter formSubmit Button
    Then I expect to displayed Student Name field "Hanna AnnName"
    Then I expect to displayed Student Email field "sannav1985@gmail.com"
    Then I expect to displayed Gender In Submmiting field "Male"
    Then I expect to displayed Mobile field "1234567890"
    When I click on Tab Thanks for submitting
    Then I expect to displayed Subject in Form field "English"
    Then I expect to displayed Hobbies field "Sports"
    Then I expect to displayed Picture field "tree.jpg"
    Then I expect to displayed Current Address field "Current Address"
    When I click on Close Button










