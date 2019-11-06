package PracticalExam;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports02","json:src/cucmbertest/testreports.json"},
monochrome=true,features= {"src/test/resources/PracticalExam/PracticalExam.feature"}, tags= {"@start,@valid"})
public class TestRunner {

}
