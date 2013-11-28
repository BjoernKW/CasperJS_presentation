//==============================================================================
// Casper generated Wed Nov 27 2013 22:34:19 GMT+0100 (CET)
//==============================================================================

var x = require('casper').selectXPath;

casper.test.begin('Test MemoEasy', 17, function suite(test) {
    casper.start('https://www.memoeasy.com/');

    casper.waitForSelector(x("//*[contains(text(), 'Mehr Umsatz durch bessere Verfügbarkeit.')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Mehr Umsatz durch bessere Verfügbarkeit.')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Mehr Umsatz durch bessere Verfügbarkeit.')]"));
    });
    casper.waitForSelector(x("//a[normalize-space(text())='Anmelden']"),
        function success() {
            this.test.assertExists(x("//a[normalize-space(text())='Anmelden']"));
            this.click(x("//a[normalize-space(text())='Anmelden']"));
        },
        function fail() {
            this.test.assertExists(x("//a[normalize-space(text())='Anmelden']"));
    });
    casper.waitForSelector(".content .balloon.even:nth-child(2)",
        function success() {
            this.test.assertExists(".content .balloon.even:nth-child(2)");
            this.click(".content .balloon.even:nth-child(2)");
        },
        function fail() {
            this.test.assertExists(".content .balloon.even:nth-child(2)");
    });
    casper.waitForSelector(x("//*[contains(text(), 'Gewinnen Sie neue Kunden durch Optimierung Ihres Angebots.')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Gewinnen Sie neue Kunden durch Optimierung Ihres Angebots.')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Gewinnen Sie neue Kunden durch Optimierung Ihres Angebots.')]"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'Registrieren')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Registrieren')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Registrieren')]"));
    });
    casper.waitForSelector(".field.margin-top-20:nth-child(14)",
        function success() {
            this.test.assertExists(".field.margin-top-20:nth-child(14)");
            this.click(".field.margin-top-20:nth-child(14)");
        },
        function fail() {
            this.test.assertExists(".field.margin-top-20:nth-child(14)");
    });
    casper.thenEvaluate(function() {
        __utils__.findOne("form#new_user input[type=submit][value='Registrieren']").disabled = false;
    });
    casper.wait(1000);
    casper.then(function() {
        this.captureSelector("results/MemoEasy_screenshot1.png", "html");
    });
    casper.waitForSelector("form#new_user input[type=submit][value='Registrieren']",
        function success() {
            this.test.assertExists("form#new_user input[type=submit][value='Registrieren']");
            this.click("form#new_user input[type=submit][value='Registrieren']");
        },
        function fail() {
            this.test.assertExists("form#new_user input[type=submit][value='Registrieren']");
    });
    // submit form
    casper.waitForSelector(x("//*[contains(text(), 'Bitte überprüfen Sie Ihre Eingaben:')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Bitte überprüfen Sie Ihre Eingaben:')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Bitte überprüfen Sie Ihre Eingaben:')]"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'muss ausgefüllt werden')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'muss ausgefüllt werden')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'muss ausgefüllt werden')]"));
    });
    casper.waitForSelector(x("//a[normalize-space(text())='Einloggen']"),
        function success() {
            this.test.assertExists(x("//a[normalize-space(text())='Einloggen']"));
            this.click(x("//a[normalize-space(text())='Einloggen']"));
        },
        function fail() {
            this.test.assertExists(x("//a[normalize-space(text())='Einloggen']"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'eMail')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'eMail')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'eMail')]"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'angemeldet bleiben')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'angemeldet bleiben')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'angemeldet bleiben')]"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'Einloggen')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Einloggen')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Einloggen')]"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'Passwort vergessen?')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Passwort vergessen?')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Passwort vergessen?')]"));
    });
    casper.waitForSelector(x("//*[contains(text(), 'Passwort vergessen?')]"),
        function success() {
            this.test.assertExists(x("//*[contains(text(), 'Passwort vergessen?')]"));
          },
        function fail() {
            this.test.assertExists(x("//*[contains(text(), 'Passwort vergessen?')]"));
    });
    casper.waitForSelector(".brand_colour",
        function success() {
            this.test.assertExists(".brand_colour");
            this.click(".brand_colour");
        },
        function fail() {
            this.test.assertExists(".brand_colour");
    });
    casper.waitForSelector(x("//a[normalize-space(text())='MemoEasy - Eine kurze Einführung']"),
        function success() {
            this.test.assertExists(x("//a[normalize-space(text())='MemoEasy - Eine kurze Einführung']"));
            this.click(x("//a[normalize-space(text())='MemoEasy - Eine kurze Einführung']"));
        },
        function fail() {
            this.test.assertExists(x("//a[normalize-space(text())='MemoEasy - Eine kurze Einführung']"));
    });

    casper.wait(1000);
    casper.then(function() {
        this.captureSelector("results/MemoEasy_screenshot2.png", "html");
    });

    casper.run(function() {test.done();});
});

