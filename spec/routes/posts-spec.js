'use strict'

var sinon = require('sinon');
var express = require('express');
var request = require('supertest');
var service = require('../../services/PostsService');
var helper = require('../helpers/common');
var stub;

describe('Route /posts', function() {

    describe('GET /', function() {

        it('should return 200', function(done) {
            stub = sinon.stub(service, 'getAllPosts').resolves({
                "message": "post"
            });
            request(require('../../app'))
                .get('/api/posts')
                .expect(200)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });
        it('should return 500', function(done) {
            stub = sinon.stub(service, 'getAllPosts').rejects(Error('oops'));
            request(require('../../app'))
                .get('/api/posts')
                .expect(500)
                .end(function(err, res) {
                    helper.end(err, res, done);
                });
        });
        afterEach(function () {
        	stub.restore();
        })

    });
})