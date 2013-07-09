var casper = require('casper').create();

casper.on('http.status.200', function(resource) {
    this.echo(resource.url + ' is OK', 'INFO');
});

casper.on("http.status.301", function(resource) {
    this.echo(resource.url + " is permanently redirected", "PARAMETER");
});

casper.on("http.status.302", function(resource) {
    this.echo(resource.url + " is temporarily redirected", "PARAMETER");
});

casper.on("http.status.404", function(resource) {
    this.echo(resource.url + " is not found", "COMMENT");
});

casper.on("http.status.500", function(resource) {
    this.echo(resource.url + " is in error", "ERROR");
});

casper.setFilter('open.location', function(location) {
    return /\?+/.test(location) ? location += '&foo=42' : location += '?foo=42';
});

casper.start();
casper.thenOpen('http://google.com/');
casper.run();
