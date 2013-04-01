var casper = require("casper").create();

casper.start('http://iks-gmbh.com', function() {
    this.test.assertExists('#leftmenu', 'Left navigation exists.');
});

casper.thenOpen('http://iks-gmbh.com', function() {
    this.test.assertExists({
        type: 'xpath',
        path: '//*[@id="leftmenu"]'
    }, 'Left navigation found via XPath.');
});

casper.run();
