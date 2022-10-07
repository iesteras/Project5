/*global QUnit*/

sap.ui.define([
	"devnttdatacom/project4/controller/View1.controller",
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",	
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function (AppController,ManagedObject,Controller,sinon,sinonqunit) {
	"use strict";

	QUnit.module("View1 Controller",{
	beforeEach: function() {
		this.oAppController = new AppController();
		this.oViewStub = new ManagedObject({});
		//Obtenemos la vista associada al controlador
		sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);
	},

	afterEach: function() {
		Controller.prototype.getView.restore();
		this.oViewStub.destroy();
	}
			
	QUnit.test("Check incremental in controller", function (assert) {
		//Validamos el incremental dentro del controlador
		//Obtenemos el controlador
		var oAppController = new AppController();
		assert.strictEqual(5, oAppController.contador(4) , "Contador was correct with 3");		
	});	
		
}

});
