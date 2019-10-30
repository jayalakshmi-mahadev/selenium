package cucumber;

import cucumber.api.java.en.Given;

public class expressiondemo {
	
	@Given("(John|Rita) has {int} cucumber(s) in (his|her) bag")
	public void john_has_cucumber_in_his_bag(Integer int1) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

}
