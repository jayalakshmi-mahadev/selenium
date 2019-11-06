package cucumber;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;



public class loginstepdefinition {
	
	WebDriver driver;
	String username;
	

	@Given("The URL of Demo Webshop Apllication")
	public void the_URL_of_Demo_Webshop_Apllication() {
		
		System.setProperty("webdriver.chrome.driver","C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://demowebshop.tricentis.com/login");
	   
	}
	
	@When("Demo Webshop User Enters {word} as username")
	public void demo_Webshop_User_Enters_Kannan_gmail_com_as_username(String email) {
		
		username=email;
		driver.findElement(By.id("Email")).sendKeys(email);
	    
	}

	@When("Demo Webshop user Enters {word} as password")
	public void demo_Webshop_user_Enters_test_as_password(String pwd) {
		
		driver.findElement(By.id("Password")).sendKeys(pwd);
	   
	}

	@When("Demo Webshop user clicks on login button")
	public void demo_Webshop_user_clicks_on_login_button() {
		
		driver.findElement(By.cssSelector("input[value='Log in']")).click();
	   
	}

	@Then("User login shall be successful")
	public void user_login_shall_be_successful() {
	    
		String actual = driver.findElement(By.className("account")).getText();
		
		Assert.assertEquals(username, actual);
		System.out.println("Logeed in Successfully");
		driver.close();
	}


}
