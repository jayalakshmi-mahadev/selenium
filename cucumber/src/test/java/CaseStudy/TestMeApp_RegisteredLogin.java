/*package CaseStudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestMeApp_RegisteredLogin {
	WebDriver driver;
	
	@Given("The URL of TestMeApp Login Page")
	public void the_URL_of_TestMeApp_Login_Page() {
		System.setProperty("webdriver.chrome.driver","C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
	}

	@When("TestMeApp User Enters {word} as username")
	public void testmeapp_User_Enters_AlexUser_as_username(String username) {
	   
		driver.findElement(By.id("userName")).sendKeys(username);
	}

	@When("TestMeApp User Enters {word} as password")
	public void testmeapp_User_Enters_Alex_as_password(String pw) {
		
		driver.findElement(By.id("password")).sendKeys(pw);
	}

	@When("TestMeApp User clicks login button")
	public void testmeapp_User_clicks_login_button() {
		
		driver.findElement(By.name("Login")).click();
	     	 	
	}

	@Then("User login is successful")
	public void user_login_is_successful() {
	    System.out.println("Login is Successfull");
	    driver.close();
	}



}
*/