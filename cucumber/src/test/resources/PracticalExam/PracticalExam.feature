@start
Feature: Login Action
   Test Login Functionality

  @valid
  Scenario Outline: Successfull login with valid credentials
    Given navigate to home page
    When user enters <username> as username and <password> as password
    Then Message login successfully  
    
    Examples:
      | username | password    |
      | Lalitha  | Password123 |
      | Rick     | Rick123     |
      | Andrew   | Andrew123   |
