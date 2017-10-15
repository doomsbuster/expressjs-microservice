'use strict';
var stub;
var app;
const request = require('supertest');
const sinon = require('sinon');
let service = require('../services/SampleService');
const helper = require('./helpers/common');
const chai = require('chai');

describe('Application Route', function() {
    describe('GET /', function() {
        it('should return http status 200', function(done) {
            // Make note that because we want express app to be required after all stubbing, we inline it into super test.
            request(require('../app'))
                .get('/')
                .expect(200)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });
    });

    describe('GET /api/retrieve', function() {
        beforeEach(function() {
            stub = sinon.stub(service, 'mySampleGetService').throws();
        });

        it('should return 500 if service call fails', function(done) {
            request(require('../app'))
                .get('/api/retrieve')
                .expect(500)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });

        afterEach(function() {
            stub.restore();
        });
    })

    describe("GET /api/retrieve", function() {

        it('should return http status 200', function(done) {
            request(require('../app'))
                .get('/api/retrieve')
                .expect(200)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });

        it('should call service method', function(done) {
            request(require('../app'))
                .get('/api/retrieve')
                .expect(200)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });

        it('should return body', function(done) {
            request(require('../app'))
                .get('/api/retrieve')
                .expect(200)
                .expect(function(res) {
                    // Cases where response needs to be validated, use chai with advanced assertions.
                    chai.expect(res.text).to.equal('respond with a resource');
                })
                .end(function(err, res) {
                    helper.end(err, res, done)
                });
        });

    });

    describe('GET /api/go', () => {
        it('should return http status 404', function(done) {
            request(require('../app'))
                .get('/api/go')
                .expect(404)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });
    });
});