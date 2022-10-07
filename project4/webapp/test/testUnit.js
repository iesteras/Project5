sap.ui.define([
	"../controller/View1.controller.js"
], function(View1Controller) {
	"use strict";

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
