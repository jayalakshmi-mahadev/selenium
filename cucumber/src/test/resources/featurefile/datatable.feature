Feature: Login feature
Scenario Outline: A valid user scenario
Given The URL of Demo Web shop Apllication 
When Demo Web shop User Enters <username> as <usertype> username
And  Demo Web shop user Enters <password> as password
And  Demo Webshop user clicks login button 
Then User login is successful


#Scenario: A valid user scenario
#Given The URL of Demo Webshop Apllication 
#When Demo Webshop User Enters askmail@email.com as username
#And  Demo Webshop user Enters abc123 as password
#And  Demo Webshop user clicks on login button 
#Then User login shall be successful

#Scenario: A valid user scenario
#Given The URL of Demo Webshop Apllication 
#When Demo Webshop User Enters kannan2@gmail.com as username
#And  Demo Webshop user Enters test1234 as password
#And  Demo Webshop user clicks on login button 
#Then User login shall be successful

Examples:
|username|password|usertype|
|kannan1@gmail.com|test1234|admin|
|askmail@email.com|abc123|guest|
|kannan2@gmail.com|test1234|vendor|