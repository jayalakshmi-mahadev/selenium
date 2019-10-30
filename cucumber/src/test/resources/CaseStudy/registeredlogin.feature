Feature: Registered Login feature
Scenario Outline: TestMeApp Registered User Login
Given The URL of TestMeApp Login Page
When TestMeApp User Enters <username> as username
And  TestMeApp User Enters <password> as password
And  TestMeApp User clicks login button 
Then User login is successful

Examples: 
|username|password|
|AlexUser|Alex@123|