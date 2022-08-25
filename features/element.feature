Feature: The Internet Guinea Pig Website

  @test2
  Scenario: I am verify Element item
    Given I am on the home page demoqa2
    Then I expect home page2 is displayed
    Then I expect to displayed Elements Button "Elements"
    When I scroll Element Button "Elements"
    Then I expect Elements Button is clickable "Elements"
    When I click on Elements Button "Elements"
    Then I expect to displayed TextBox button "Text Box"
    When I click on TextBox button "Text Box"
    Then I expect to displayed fullName field
    Then I expect to displayed Email field
    Then I expect to displayed Current Address field
    Then I expect to displayed Permanent Address field
    When I fill in "Hanna" and "name@example.com" and "currentAddress" and "permanentAddress" fields
    When I scroll Submit button "Submit"
    Then I click on Submit button "Submit"
    Then I expect to displayed Full Name "Hanna"
    When I expect to displayed Mail "name@example.com"
    Then I expect to displayed Current Address Fill In "currentAddress"
    Then I expect to displayed Permanent Address "permanentAddress"
    When I click on Buttons button "Buttons"
    Then I expect to displayed Double click button "Double Click Me"
    Then I expect to displayed Right click button "Right Click Me"
    Then I expect to displayed Click button "Click Me"
    Then I expect that Double click button is clickable "Double Click Me"
    When I click on Double click button "Double Click Me"
    Then I expect to displayed Double click button Fill In "You have done a double click"
    Then I expect that rightClickButton is clickable "Right Click Me"
    When I rightclick on rightClickButton "Right Click Me"
    Then I expect to displayed Right Click Button Fill In "You have done a right click"
    When I scroll clickButton "Click Me"
    Then I expect that clickButton is clickable "Click Me"
    When I click on Click Me Button "Click Me"
    Then I expect to displayed Click Me Button Fill In "You have done a dynamic click"










