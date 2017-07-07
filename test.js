var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var IndexPage = require('./index.page.js');

const mochaTimeOut = 30000; //ms
 
var driver;

test.before(function() {
    this.timeout(mochaTimeOut);

    username = process.env.SAUCE_USERNAME;
    accessKey = process.env.SAUCE_ACCESS_KEY;

    driver = new webdriver.Builder().withCapabilities({
        'browserName': 'chrome',
        'platform': 'Windows XP',
        'version': '43.0',
        'host': 'ondemand.saucelabs.com',
        'port': 80
    }).
    usingServer("http://" + username + ":" + accessKey +
                "@ondemand.saucelabs.com:80/wd/hub").
    build();
}); 

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});

test.describe('TheInternet', function() {
  this.timeout(mochaTimeOut);
  test.it('shows a login link', function () {
    var indexPage = new IndexPage(driver);
    indexPage.load();

    indexPage.loginLink().isDisplayed().then(function(displayed) {
      assert.equal(displayed, true, "Login link not displayed");
    });
    
  });

});