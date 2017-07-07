var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

const mochaTimeOut = 30000; //ms

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
