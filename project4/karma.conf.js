module.exports = function(config) {
	"use strict";

	var chromeFlags = [
		"--window-size=1280,1024"
	];

	config.set({

		frameworks: ["ui5", "qunit"],
		plugins: ["karma-ui5", "karma-qunit", "karma-coverage"],
		
		ui5: {
      			url: "https://openui5.hana.ondemand.com",
      			mode: "script",
      			config: {
        			async: true,
        			resourceRoots: {
          				"root_path": "./webapp"
        			}
      			},
      			tests: [
        			"root_path/test/unit/AllTests"
      			]
    		},
		
		browsers: ["ChromeHeadless"],

		browserConsoleLogOptions: {
			level: "error"
		},

		customLaunchers: {
			CustomChrome: {
				base: "Chrome",
				flags: chromeFlags
			},
			CustomChromeHeadless: {
				base: "ChromeHeadless",
				flags: chromeFlags
			}
		},

	});
};
