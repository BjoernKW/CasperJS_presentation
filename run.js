casper.run(function() {
    this.test.done(5);
    this.test.renderResults(true, 0, 'results/test_results.xml');
    this.test.viewport(1600, 1200);
});
