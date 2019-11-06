package PracticalExam;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class PracticalExam {

	WebDriver driver;
	String user, pswd;

	@Given("navigate to home page")
	public void navigate_to_home_page() {
		System.setProperty("webdriver.chrome.driver", "C:\\NexGen Testing Stream\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://10.232.237.143:443/TestMeApp/login.htm");
		Assert.assertTrue(driver.getTitle().contains("Login"));
	}

	@When("user enters {word} as username and {word} as password")
	public void user_enters_Lalitha_as_username_and_Password_as_password(String uname, String pwd) throws InterruptedException {
		user = uname;
		pswd = pwd;
		driver.findElement(By.id("userName")).sendKeys(user);
		driver.findElement(By.id("password")).sendKeys(pswd);
		driver.findElement(By.name("Login")).click();		
	}

	@Then("Message login successfully")
		public void message_login_successfully()
		{
		String actual=driver.findElement(By.linkText("SignOut")).getText();
		Assert.assertEquals("SignOut", actual);
		System.out.println("Logged in Successfully");
		driver.close();
		
	}
}
