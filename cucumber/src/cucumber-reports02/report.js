$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/PracticalExam/PracticalExam.feature");
formatter.feature({
  "name": "Login Action",
  "description": "   Test Login Functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@start"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cusername\u003e as username and \u003cpassword\u003e as password",
  "keyword": "When "
});
formatter.step({
  "name": "Message login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    },
    {
      "cells": [
        "Rick",
        "Rick123"
      ]
    },
    {
      "cells": [
        "Andrew",
        "Andrew123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@start"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracticalExam.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Lalitha as username and Password123 as password",
  "keyword": "When "
});
formatter.match({
  "location": "PracticalExam.user_enters_Lalitha_as_username_and_Password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticalExam.message_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@start"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracticalExam.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Rick as username and Rick123 as password",
  "keyword": "When "
});
formatter.match({
  "location": "PracticalExam.user_enters_Lalitha_as_username_and_Password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticalExam.message_login_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successfull login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@start"
    },
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "navigate to home page",
  "keyword": "Given "
});
formatter.match({
  "location": "PracticalExam.navigate_to_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Andrew as username and Andrew123 as password",
  "keyword": "When "
});
formatter.match({
  "location": "PracticalExam.user_enters_Lalitha_as_username_and_Password_as_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Message login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "PracticalExam.message_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});