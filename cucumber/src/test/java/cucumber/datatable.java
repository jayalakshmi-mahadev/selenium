package cucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.object.model.Loginpage;

public class datatable {
	
	WebDriver driver;
	String username;
	

	@Given("The URL of Demo Web shop Apllication")
	public void the_URL_of_Demo_Webshop_Apllication() {
		
		System.setProperty("webdriver.chrome.driver","C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		driver=new ChromeDriver();
		PageFactory.initElements(driver, Loginpage.class);
		driver.manage().window().maximize();
		driver.get("http://demowebshop.tricentis.com/login");
	   
	}
	
	@When("Demo Web shop User Enters {word} as {word} username")
	public void demo_Webshop_User_Enters_Kannan_gmail_com_as_username(String email, String usertype) {
		
		username=email;
		//driver.findElement(By.id("Email")).sendKeys(email);
		Loginpage.email.sendKeys(email);
	    
	}

	@When("Demo Web shop user Enters {word} as password")
	public void demo_Webshop_user_Enters_test_as_password(String pwd) {
		
		//driver.findElement(By.id("Password")).sendKeys(pwd);
		Loginpage.password.sendKeys(pwd);
	   
	}

	@When("Demo Webshop user clicks login button")
	public void demo_Webshop_user_clicks_on_login_button() {
		
		//driver.findElement(By.cssSelector("input[value='Log in']")).click();
		Loginpage.login.click();
	   
	}

	@Then("User login is successful")
	public void user_login_shall_be_successful() {
	    
		String actual = driver.findElement(By.className("account")).getText();
		
		Assert.assertEquals(username, actual);
		System.out.println("Logeed in Successfully");
		driver.close();
	}


}
