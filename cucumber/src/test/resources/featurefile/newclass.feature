Feature: Demo webshop feature
Scenario: Demo webshop valid user login
Given The URL of the Demo webshop
When  The user enters "askmail@email.com" as username
And The user enters "abc123" as password
And User clicks on login button
Then user is in valid page 