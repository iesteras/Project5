const server = require("../server.js");

describe("Opentext Service Unit Test", () => {
	describe("Decrypt Payload", () => {
		it("+ Decrypt Payload", (done) => {
            let privateKey = 'defefr'
            let payload = 'serfdddss'
            const decryptValue = server.decryptPayload(privateKey, payload)            
            if (decryptValue && decryptValue !== ""){
                done();                    
            }else{
                done("Cannot Decrypt Payload");    
            }  
		});
	});

    describe("Create Date", () => {
		it("+ Create Date", (done) => {
            const valueGetDate = server.getOtDate()                          
            if (valueGetDate && valueGetDate.length == 9){
                console.error(valueGetDate);
                done();                    
            }else{
                done("Cannot create Date");    
            }
		});
	});

    describe("Add Headers", () => {
		it("+ Add Headers", (done) => {
            let binding = "";
            binding.username = "TEST";
            binding.password = "TESTPASS";
            const namespace = "opentT";
            const valueGetHeaders = server.addHeaders(binding, namespace)                          
            if (valueGetHeaders && valueGetHeaders.headers 
                    && valueGetHeaders.headers.Authorization
                    && valueGetHeaders.headers.Authorization != ""){                
                console.error(valueGetHeaders);
                done();                    
            }else{                
                done("Add Headers");    
            }
		});
	});

    
    describe("Generate Token", () => {
		it("+ Generate Token", (done) => {
            const idSession = {"user": "TEST" , "password":"TESTPASS"};
            const username = "opentT";
            const sDate = server.getOtDate();
            let credentialot = {};
            credentialot.value = "valTES";
            const secretStoreCred = "values";
            const valueToken = server.generateToken(idSession, username, sDate, credentialot,secretStoreCred)                          
            if (valueToken && valueToken  != ""){
                console.error(valueToken);
                done();                    
            }else{
                done("Generate Token");    
            }
		});
	});    
    
});