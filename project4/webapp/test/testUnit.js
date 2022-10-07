const view1Controller = require("../controller/View1.controller.js");

describe("Opentext Service Unit Test", () => {
	describe("Testing method count", () => {
		it("+ method count", (done) => {
            let param = 3;
            let instan = new view1Controller();
            const incrementado = instan.contador(param)        
            if (incrementado === 4){
                done();                    
            }else{
                done("Error count");    
            }  
		});
	});

    
    
});
