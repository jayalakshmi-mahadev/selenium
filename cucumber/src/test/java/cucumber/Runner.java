package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
//@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports"}, monochrome=true, features= {"src/test/resources/featurefile/Login.feature"})
//@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports01"}, monochrome=true, features= {"src/test/resources/featurefile/datatable.feature"})
@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports01"}, monochrome=true, features= {"src/test/resources/featurefile/newclass.feature"})

public class Runner {

}
