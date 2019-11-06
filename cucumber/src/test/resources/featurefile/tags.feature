@feature
Feature: Test
  I want to use this template for my feature file

  @bag
  Scenario: Title of your scenario
    Given I want to write a step with precondition1
    And some other precondition
    When I complete action
    And some other action
    And yet another action
    Then I validate the outcomes
    And check more outcomes
    
    @shout
  Scenario: Title of your scenario
    Given I want to write a step with precondition2
    And some other precondition
    When I complete action
    And some other action
    And yet another action
    Then I validate the outcomes
    And check more outcomes

  @bag @demo
  Scenario Outline: Title of your scenario outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
