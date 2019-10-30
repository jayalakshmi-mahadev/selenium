Feature: Register feature
Scenario: TestMeApp User Registration
Given The URL of TestMeApp registration page
When TestMeApp user Enters "Ammu" as username
And TestMeApp user Enters "Jayalakshmi" as Firstname
And TestMeApp user Enters "Mahadev" as Lastname
And TestMeApp user Enters "jaya123" as Password
And TestMeApp user Enters "jaya123" as ConfirmPassword
And TestMeApp user selects "Female" as Gender
And TestMeApp user Enters "jm@gmail.com" as Email
And TestMeApp user Enters 9654783214 as Mobileno
And TestMeApp user Enters "03/15/1995" as DOB
And TestMeApp user Enters "Bengalore" as Address
And TestMeApp user selects "What is your Pet Name?" as SecurityQuestion
And TestMeApp user Enters "Simba" as Answer
And TestMeApp user clicks on Register button
Then The user registration is successful
