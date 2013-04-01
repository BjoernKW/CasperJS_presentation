var casper = require('casper').create();

casper.setFilter('open.location', function(location) {
    return /\?+/.test(location) ? location += "&foo=42" : location += "?foo=42";
});
