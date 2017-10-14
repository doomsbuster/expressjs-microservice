'use strict';
var service = require('../../services/SampleService');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('SampleService', function() {
	it('mySampleGetService should return a name', function () {
		let name = service.mySampleGetService('ashish');
		expect(name).to.equal('ashish');
	});
});