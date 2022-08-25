Feature: The Internet Guinea Pig Website

  @test4
  Scenario: I am verify Alert item
    Given I am on the home page demoqa4
    Then I expect home page4 is displayed
    Then I expect to displayed Alert Button "Alerts, Frame & Windows"
    When I scroll Element Button "Alerts, Frame & Windows"
    When I click on Alert Button "Alerts, Frame & Windows"
    Then I expect to displayed Browse Windows Button "Browser Windows"
    When I click on Brows Windows Button "Browser Windows"
    Then I expect to displayed New Tab Button "New Tab"
    When I click on New Tab Button "New Tab"
    When I switch New Tab
    Then I expect New Tab Content "This is a sample page"
    When I switchBack ToolsQA
    Then I expect to displayed New Window Button "New Window"
    When I click on New Window Button "New Window"
    When I switch New Window
    Then I expect New Window Content "This is a sample page"
    When I switchBack ToolsQAPage
    Then I expect to displayed Modals Dialog Button "Modal Dialogs"
    When I scroll Modals Dialog Button "Modal Dialogs"
    When I click on Modals Dialog Button "Modal Dialogs"
    Then I expect to displayed small Modals Button "Small modal"
    When I click on small Modals Button "Small modal"
    Then I expect to displayed small Modal Window
    Then I expect to displayed small Modal Content "This is a small modal. It has very less content"
    Then I expect to displayed small Modals Close Button
    When I click on small Modals Close Button
    Then I expect to displayed large Modals Button "Large modal"
    When I click on large Modals Button "Large modal"
    Then I expect to displayed large Modals Window
    Then I expect to displayed large Modal Content "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    Then I expect to displayed large Modals Close Button
    When I click on large Modals Close Button


