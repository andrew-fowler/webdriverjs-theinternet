var assert = require('assert');
var test = require('selenium-webdriver/testing');
var IndexPage = require('../model/index.page.js');
var hooks = require('../support/hooks');

const mochaTimeOut = 30000; //ms

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