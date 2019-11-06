package PracticalExam;

import io.cucumber.junit.CucumberOptions;

@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports","json:src/cucmbertest/testreports.json"},
monochrome=true,features= {"src/test/resources/PracticalExam.feature"}, tags= {"@tag,tag1"})
public class TestRunner {

}
