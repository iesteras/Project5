/*global QUnit*/

sap.ui.define([
	"devnttdatacom/project4/controller/View1.controller",
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",	
	"sap/ui/thirdparty/sinon",
	"sap/ui/thirdparty/sinon-qunit"
], function (AppController,ManagedObject,Controller,sinon,sinonqunit) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("Test match functions", function (assert) {
		assert.strictEqual("D", "D", "D matches D");
	});
		
});
