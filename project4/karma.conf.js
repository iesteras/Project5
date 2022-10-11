module.exports = function(config) {
	"use strict";

	var chromeFlags = [
		"--window-size=1280,1024"
	];

	config.set({

		frameworks: ["ui5"],
				
		ui5: {
        		url: "https://sapui5.hana.ondemand.com"
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
