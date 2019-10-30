$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefile/newclass.feature");
formatter.feature({
  "name": "Demo webshop feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Demo webshop valid user login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The URL of the Demo webshop",
  "keyword": "Given "
});
formatter.match({
  "location": "newclass.the_URL_of_the_Demo_webshop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"askmail@email.com\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "newclass.the_user_enters_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters \"abc123\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "newclass.the_user_enters_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "newclass.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is in valid page",
  "keyword": "Then "
});
formatter.match({
  "location": "newclass.user_is_in_valid_page()"
});
formatter.result({
  "status": "passed"
});
});