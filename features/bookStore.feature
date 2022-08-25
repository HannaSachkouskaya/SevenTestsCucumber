Feature: The Internet Guinea Pig Website

  @test7
  Scenario: I am verify Book Store item
    Given I am on the home page demoqa7
    Then I expect home page7 is displayed
    Then I expect to displayed Store Button "Book Store Application"
    When I scroll on book Store Button "Book Store Application"
    Then I expect that Store Button is clickable "Book Store Application"
    When I click on Store Button "Book Store Application"
    Then I expect to displayed Git Pocket Bok
    Then I expect that Git Pocket book is clickable
    When I click on Git Pocket book
    Then I expect to displayed ISBN
    Then I expect ISBN matches pattern "\d"
    When I scroll up PageH
    Then I expect to displayed PageH
    Then I expect to displayed Store Button2 "Book Store Application"
    Then I expect that book Store Button2 is clickable "Book Store Application"
    When I click on Store Button2 "Book Store Application"
    Then I expect to displayed Search Field
    When I click on Search Field
    When I fill in Seach Field "JavaScript"
    Then I expect to displayed Search Button
    When I click on Search Button
    When I search four books JS on page







