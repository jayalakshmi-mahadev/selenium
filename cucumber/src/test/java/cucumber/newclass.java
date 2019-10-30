package cucumber;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class newclass {
	WebDriver driver;
	
	@Given("The URL of the Demo webshop")
	public void the_URL_of_the_Demo_webshop() {
		
		System.setProperty("webdriver.chrome.driver","C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demowebshop.tricentis.com/login");
		Assert.assertTrue(driver.getTitle().contains("Login"));
	   
	}

	@When("The user enters {string} as username")
	public void the_user_enters_as_username(String email) {
		
		driver.findElement(By.id("Email")).sendKeys(email);
	}

	@When("The user enters {string} as password")
	public void the_user_enters_as_password(String pwd) {
		
		driver.findElement(By.id("Password")).sendKeys(pwd);
	}
	
	
	@When("User clicks on login button")
	public void user_clicks_on_login_button() {
		driver.findElement(By.cssSelector("input[value='Log in']")).click();
	}

	@Then("user is in valid page")
	public void user_is_in_valid_page() {
		
       Assert.assertTrue(driver.findElement(By.linkText("Log out")).isDisplayed());
		System.out.println("Logeed in Successfully");
		driver.close();
	}



}
