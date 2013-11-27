//==============================================================================
// Casper generated Wed Nov 20 2013 09:25:23 GMT+0100 (CET)
//==============================================================================

var x = require('casper').selectXPath;

casper.test.begin('Test iks GmbH', 4, function suite(test) {
    casper.start('http://www.iks-gmbh.com/', function() {
        test.assertExists(x("//*[contains(text(), 'Home')]"));
    });

    casper.then(function() {
        this.test.assertExists(x("//a[normalize-space(text())='Unternehmen']"));
        this.click(x("//a[normalize-space(text())='Unternehmen']"));
    });

    casper.waitForSelector(
        "h1",
        function success() {
            this.test.assertExists("h1");
            this.click("h1");
        },
        function fail() {
            this.test.assertExists("h1");
        }
    );

    casper.waitForSelector(
        x("//*[contains(text(), 'Daten und Fakten')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Daten und Fakten')]"));
        },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Daten und Fakten')]"));
        }
    );

    casper.run(function() {
        test.done();
    });
});
