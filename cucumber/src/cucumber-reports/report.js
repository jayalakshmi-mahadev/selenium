$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefile/Login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "A valid user scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@shout"
    }
  ]
});
formatter.step({
  "name": "The URL of Demo Webshop Apllication",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstepdefinition.the_URL_of_Demo_Webshop_Apllication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Demo Webshop User Enters askmail@email.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "loginstepdefinition.demo_Webshop_User_Enters_Kannan_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Demo Webshop user Enters abc123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "loginstepdefinition.demo_Webshop_user_Enters_test_as_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Demo Webshop user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginstepdefinition.demo_Webshop_user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login shall be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinition.user_login_shall_be_successful()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d78.0.3904.87)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC4-D-J0FYFD2\u0027, ip: \u002710.187.101.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\TRAINI~1.15\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:57194}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 57149358ebfbf2cf2a1aa9902a211877\n*** Element info: {Using\u003dclass name, value\u003daccount}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:412)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:389)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat cucumber.loginstepdefinition.user_login_shall_be_successful(loginstepdefinition.java:55)\r\n\tat ✽.User login shall be successful(file:src/test/resources/featurefile/Login.feature:16)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "A valid user scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@demo"
    },
    {
      "name": "@bag"
    }
  ]
});
formatter.step({
  "name": "The URL of Demo Webshop Apllication",
  "keyword": "Given "
});
formatter.match({
  "location": "loginstepdefinition.the_URL_of_Demo_Webshop_Apllication()"
});
formatter.result({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d78.0.3904.87)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC4-D-J0FYFD2\u0027, ip: \u002710.187.101.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0112EB13+1501971]\n\tOrdinal0 [0x010AF6D1+980689]\n\tOrdinal0 [0x0103765F+489055]\n\tOrdinal0 [0x010302B5+459445]\n\tOrdinal0 [0x0102FEA4+458404]\n\tOrdinal0 [0x0102FA1D+457245]\n\tOrdinal0 [0x0102F21D+455197]\n\tOrdinal0 [0x0102EDE4+454116]\n\tOrdinal0 [0x0102EDA5+454053]\n\tOrdinal0 [0x01036525+484645]\n\tOrdinal0 [0x0102ED5C+453980]\n\tOrdinal0 [0x0102F6D1+456401]\n\tOrdinal0 [0x0102F21D+455197]\n\tOrdinal0 [0x0102EDE4+454116]\n\tOrdinal0 [0x0102EDA5+454053]\n\tOrdinal0 [0x01034ECE+478926]\n\tOrdinal0 [0x0102ED5C+453980]\n\tOrdinal0 [0x0102F6D1+456401]\n\tOrdinal0 [0x0102F21D+455197]\n\tOrdinal0 [0x0102EDE4+454116]\n\tOrdinal0 [0x0102EDA5+454053]\n\tOrdinal0 [0x0103365B+472667]\n\tOrdinal0 [0x0102ED5C+453980]\n\tOrdinal0 [0x0102F6D1+456401]\n\tOrdinal0 [0x0102F21D+455197]\n\tOrdinal0 [0x0102EDE4+454116]\n\tOrdinal0 [0x0102EDA5+454053]\n\tOrdinal0 [0x01032C67+470119]\n\tOrdinal0 [0x0102ED5C+453980]\n\tOrdinal0 [0x0102F6D1+456401]\n\tOrdinal0 [0x0102F21D+455197]\n\tOrdinal0 [0x0102EDE4+454116]\n\tOrdinal0 [0x0102EDA5+454053]\n\tOrdinal0 [0x0102BA0C+440844]\n\tOrdinal0 [0x0102ED5C+453980]\n\tOrdinal0 [0x0102EC44+453700]\n\tOrdinal0 [0x01038330+492336]\n\tOrdinal0 [0x00FEA108+172296]\n\tOrdinal0 [0x00FE942D+169005]\n\tOrdinal0 [0x00FE78EB+162027]\n\tOrdinal0 [0x00FD0AC7+68295]\n\tOrdinal0 [0x00FD1B40+72512]\n\tOrdinal0 [0x00FD1AD9+72409]\n\tOrdinal0 [0x010C8F37+1085239]\n\tGetHandleVerifier [0x011CD7ED+503293]\n\tGetHandleVerifier [0x011CD580+502672]\n\tGetHandleVerifier [0x011D46AC+531644]\n\tGetHandleVerifier [0x011CDFFA+505354]\n\tOrdinal0 [0x010C0606+1050118]\n\tOrdinal0 [0x010C047F+1049727]\n\tOrdinal0 [0x010CAF9B+1093531]\n\tOrdinal0 [0x010CB103+1093891]\n\tOrdinal0 [0x010CA095+1089685]\n\tBaseThreadInitThunk [0x752D0419+25]\n\tRtlGetAppContainerNamedObjectPath [0x777E662D+237]\n\tRtlGetAppContainerNamedObjectPath [0x777E65FD+189]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat cucumber.loginstepdefinition.the_URL_of_Demo_Webshop_Apllication(loginstepdefinition.java:24)\r\n\tat ✽.The URL of Demo Webshop Apllication(file:src/test/resources/featurefile/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Demo Webshop User Enters kannan2@gmail.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "loginstepdefinition.demo_Webshop_User_Enters_Kannan_gmail_com_as_username(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Demo Webshop user Enters test1234 as password",
  "keyword": "And "
});
formatter.match({
  "location": "loginstepdefinition.demo_Webshop_user_Enters_test_as_password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Demo Webshop user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "loginstepdefinition.demo_Webshop_user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User login shall be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefinition.user_login_shall_be_successful()"
});
formatter.result({
  "status": "skipped"
});
});