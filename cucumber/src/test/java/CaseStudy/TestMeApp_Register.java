/*package CaseStudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestMeApp_Register {
	WebDriver driver;
	
	@Given("The URL of TestMeApp registration page")
	public void the_URL_of_TestMeApp_registration_page() {
		System.setProperty("webdriver.chrome.driver","C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://10.232.237.143:443/TestMeApp/RegisterUser.htm");
	}

	@When("TestMeApp user (Enters|selects) {String} as (username|Firstname|Lastname|Password|ConfirmPassword|Gender|Email|DOB|Address|SecurityQuestion|Answer)")
	public void testmeapp_user_Enters_Ammu_as_username(String data) throws InterruptedException {
	  
		  driver.findElement(By.id("userName")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.id("firstName")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.id("lastName")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.id("password")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.id("pass_confirmation")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.xpath("//input[@value=\"Female\"]")).click();;
		  Thread.sleep(2000);
		  driver.findElement(By.id("emailAddress")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.name("dob")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.id("address")).sendKeys(data);
		  Thread.sleep(2000);
		  driver.findElement(By.id("securityQuestion")).sendKeys(data);;
		  Thread.sleep(2000);
		  driver.findElement(By.id("answer")).sendKeys(data);
		  Thread.sleep(2000);
		 
		 
	}

	@When("TestMeApp user Enters {int} as Mobileno")
	public void testmeapp_user_Enters_as_Mobileno(Integer int1) {
		driver.findElement(By.id("mobileNumber")).sendKeys("9657843218");
	}

	@When("TestMeApp user clicks on Register button")
	public void testmeapp_user_clicks_on_Register_button() {
		driver.findElement(By.name("Submit")).click();
	}

	@Then("The user registration is successful")
	public void the_user_registration_is_successful() {
		System.out.println("Logeed in Successfully");
		driver.close();
	}


}
*/