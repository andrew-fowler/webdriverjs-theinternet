var webdriver = require('selenium-webdriver');

IndexPage = function IndexPage(driver) {
    this.driver = driver;
    this.url = 'https://the-internet.herokuapp.com/';

    this.loginLinkSelector = webdriver.By.xpath("//a[@href='/login']")
};

IndexPage.prototype.load = function() {
    this.driver.get(this.url);
};

IndexPage.prototype.loginLink = function(){
    return this.driver.findElement(this.loginLinkSelector); 
}

IndexPage.prototype.loginLinkIsDisplayed = function() {
    return this.driver.findElement(this.loginLinkSelector).isDisplayed()
}; 

module.exports = IndexPage;