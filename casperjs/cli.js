var casper = require("casper").create();

casper.echo(casper.cli.has(0));
casper.echo(casper.cli.get(0));
casper.echo(casper.cli.has(3));
casper.echo(casper.cli.get(3));
casper.echo(casper.cli.has("foo"));
casper.echo(casper.cli.get("foo"));

casper.cli.drop("foo");

casper.echo(casper.cli.has("foo"));
casper.echo(casper.cli.get("foo"));

casper.exit();
