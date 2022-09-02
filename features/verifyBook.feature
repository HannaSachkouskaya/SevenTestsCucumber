Feature: The Internet Guinea Pig Website

  @test8
  Scenario Outline: I am verify bookSubTitle
    Given I am on the home page demoqa8
    Then I expect home page8 is displayed
    When I scroll "Book Store Application" button
    When I click on "Book Store Application" button
    Then I expect to displayed Search Field1
    When I click on Search Field1
    When I fill in Seach Field1 "JavaScript"
    Then I expect to displayed Search Button1
    When I click on Search Button1
    When I search four books JS on page1
    When I scroll "Learning JavaScript Design Patterns" book
    When I open "<bookTitile>" book
    When I scroll "<bookSubTitle>" Sub Title
    Then I expect to displayed book with "<bookSubTitle>" Sub Title

    Examples:
      | bookTitile                          | bookSubTitle                                                      |
      | Learning JavaScript Design Patterns | A JavaScript and jQuery Developer's Guide                         |
      | Speaking JavaScript                 | An In-Depth Guide for Programmers                                 |
      | Programming JavaScript Applications | Robust Web Architecture with Node, HTML5, and Modern JS Libraries |
      | Eloquent JavaScript, Second Edition | A Modern Introduction to Programming                              |











