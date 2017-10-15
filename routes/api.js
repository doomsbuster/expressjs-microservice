'use strict';

var express = require('express');
var postsEndpoint = require('./posts');
var repoEndpoint = require('./repo/repo');

var router = express.Router();

//---------------------------------------------------------------
// Swagger API Specification - swagger-jsdoc
//---------------------------------------------------------------


//---------------------------------------------------------------
// API Route specification
//---------------------------------------------------------------
router.use('/posts', postsEndpoint);
router.use('/repo', repoEndpoint);

module.exports = router;