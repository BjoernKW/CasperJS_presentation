//==============================================================================
// Casper generated Wed Nov 20 2013 09:25:23 GMT+0100 (CET)
//==============================================================================

var x = require('casper').selectXPath;
var casper = require('casper').create();
casper.options.viewportSize = {width: 1084, height: 775};
casper.test.begin('Verify home link', 1, function suite(test) {
    casper.start('http://www.iks-gmbh.com/');
    test.assertExists(x("//*[contains(text(), 'Home')]"));
});

casper.waitForSelector(x("//a[normalize-space(text())='Unternehmen']"),
    function success() {
        this.test.assertExists(x("//a[normalize-space(text())='Unternehmen']"));
        this.click(x("//a[normalize-space(text())='Unternehmen']"));
    },
    function fail() {
        this.test.assertExists(x("//a[normalize-space(text())='Unternehmen']"));
});
casper.waitForSelector("h1",
    function success() {
        this.test.assertExists("h1");
        this.click("h1");
    },
    function fail() {
        this.test.assertExists("h1");
});
casper.waitForSelector(x("//*[contains(text(), 'Daten und Fakten')]"),
    function success() {
        this.test.assertExists(x("//*[contains(text(), 'Daten und Fakten')]"));
      },
    function fail() {
        this.test.assertExists(x("//*[contains(text(), 'Daten und Fakten')]"));
});

casper.run(function() {this.test.renderResults(true);});
