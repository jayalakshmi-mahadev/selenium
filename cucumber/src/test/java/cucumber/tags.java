package cucumber;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class tags {
	@Given("I want to write a step with precondition{int}")
	public void iWantToWriteAStepWithPrecondition(Integer int1) {
	    
	}

	@Given("some other precondition")
	public void someOtherPrecondition() {
	    
	}

	@When("I complete action")
	public void iCompleteAction() {
	   
	}

	@When("some other action")
	public void someOtherAction() {
	
	}

	@When("yet another action")
	public void yetAnotherAction() {
	   
	}

	@Then("I validate the outcomes")
	public void iValidateTheOutcomes() {
	    
	}

	@Then("check more outcomes")
	public void checkMoreOutcomes() {
	   
	}

	@Given("I want to write a step with name{int}")
	public void iWantToWriteAStepWithName(Integer int1) {
	 
	}

	@When("I check for the {int} in step")
	public void iCheckForTheInStep(Integer int1) {
	    
	}

	@Then("I verify the success in step")
	public void iVerifyTheSuccessInStep() {
	    
	}

	@Then("I verify the Fail in step")
	public void iVerifyTheFailInStep() {
	    
	}



}
