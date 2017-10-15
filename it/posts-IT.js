'use strict'

var express = require('express');
var request = require('supertest');
var service = require('../services/PostsService');
var helper = require('../spec/helpers/common');

describe('Route /posts', function() {

    describe('GET /', function() {

        it('should return 200', function(done) {
            request(require('../app'))
                .get('/api/posts')
                .expect(200)
                .end(function(err, res) {
                    console.log(res.body);
                    helper.end(err, res, done);
                });
        });

    });
    describe('GET /post', function() {

        it('should return 200', function(done) {
            request(require('../app'))
                .get('/api/posts/postinfo?postId=1')
                .expect(200)
                .end(function(err, res) {
                    debugger;
                    console.log(res.body);
                    helper.end(err, res, done);
                });
        });

    });
})