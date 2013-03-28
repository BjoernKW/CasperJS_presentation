casper.start(start_url, function() {
    this.captureSelector('results/google_start.png', 'html');
    this.test.assertTitle('Google', 'Google homepage title is as expected');
    this.test.assertExists('form[action="/search"]', 'Search form was found');
    this.fill('form[action="/search"]', {
        q: 'casperjs'
    }, true);
});

casper.then(function() {
    this.captureSelector('results/google_search_result.png', 'html');
    this.test.assertTitle('casperjs - Google-Suche', 'Search results page title is as expected');
    this.test.assertUrlMatch(/q=casperjs/, 'Search term has been submitted');
    this.test.assertEval(function() {
        return __utils__.findAll('h3.r').length >= 10;
    }, 'Google search for "casperjs" retrieves 10 or more results');
});

casper.test.done();
