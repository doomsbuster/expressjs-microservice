'use strict';

import express from 'express';
import postsEndpoint from 'posts';
import commentsEndpoint from 'comments';
import repoEndpoint from 'repo/repo';

var router = express.Router();

//---------------------------------------------------------------
// Swagger API Specification - swagger-jsdoc
//---------------------------------------------------------------


//---------------------------------------------------------------
// API Route specification
//---------------------------------------------------------------
router.use('/posts', postsEndpoint);
router.use('/comments', commentsEndpoint);
router.use('/repo', repoEndpoint);

module.exports = router;