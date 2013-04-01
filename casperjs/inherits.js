var Casper = require('casper').Casper;
var utils = require('utils');
var links = {
    'http://edition.cnn.com/': 0,
    'http://www.nytimes.com/': 0,
    'http://www.bbc.co.uk/': 0,
    'http://www.guardian.co.uk/': 0
};

function Fantomas() {
    Fantomas.super_.apply(this, arguments);
}

// Let's make our Fantomas class extending the Casper one
// please note that at this point, CHILD CLASS PROTOTYPE WILL BE OVERRIDEN
utils.inherits(Fantomas, Casper);

Fantomas.prototype.countLinks = function() {
    return this.evaluate(function() {
        return __utils__.findAll('a[href]').length;
    });
};

Fantomas.prototype.renderJSON = function(what) {
    return this.echo(JSON.stringify(what, null, '  '));
};

var fantomas = new Fantomas({
    verbose: true,
    logLevel: "debug"
});

fantomas.start();

Object.keys(links).forEach(function(url) {
    fantomas.thenOpen(url, function() {
        links[url] = this.countLinks();
    });
});

fantomas.run(function() {
    this.renderJSON(links).exit();
});
