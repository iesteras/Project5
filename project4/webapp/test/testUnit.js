const sap = require("https://sapui5.hana.ondemand.com/resources/sap-ui-core.js");

sap.ui.define([
	"../controller/View1.controller"
], function(View1Controller) {
	"use strict";

	describe("Service Unit Test", () => {	
            describe("Testing method count", () => {
		it("+ method count", (done) => {
            let param = 3;
            const incrementado = View1Controller.contador(param)        
            if (incrementado === 4){
                done();                    
            }else{
                done("Error count");    
            }  
		});
	});
	
	
	});

});
