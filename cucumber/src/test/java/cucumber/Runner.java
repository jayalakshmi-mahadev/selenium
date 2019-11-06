package cucumber;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)

//@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports"}, monochrome=true, features= {"src/test/resources/featurefile/Login.feature"})
//@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports01"}, monochrome=true, features= {"src/test/resources/featurefile/datatable.feature"})
//@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports01"}, monochrome=true, features= {"src/test/resources/featurefile/newclass.feature"})

@CucumberOptions(plugin= {"pretty","html:src/cucumber-reports", "json:src/cucumber/reports.json"}, monochrome=true, 
dryRun=false, features= {"src/test/resources/featurefile/Login.feature"},snippets=SnippetType.CAMELCASE, tags= {"@demo, @shout"})

public class Runner {

}
