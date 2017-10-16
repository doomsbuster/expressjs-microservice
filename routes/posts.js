'use strict';

var express = require('express');
var postService = require('../services/PostsService');
var log = require('../utils/Logger');

let router = express.Router();
let sampleError = {
	type: 'ErrorType',
	message: 'Error occured',
	messageCode: 1052 // Optional message code (numeric)
};

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Returns all posts with details
 *     tags:
 *       - Posts
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.get('/', function(req, res) {
	try {
		var promise = postService.getAllPosts();

		promise.then(function(data) {
			// Do something (if required) with the data, then send it to the client
			res.status(200).send(data);
		});

		promise.catch(function(error) {
			// Never send stack traces to the client.
			log.error('Failed')
			res.status(500).send(sampleError);
		});
	} catch (e) {
		// Use a good logging framework for logging to file
		log.error('Route /posts/ failed with error', e);
		res.status(500).send(sampleError);
	}
});

/**
 * @swagger
 * /posts/post:
 *   get:
 *     summary: Get details of a post
 *     description: Returns details of a single post
 *     tags:
 *       - Posts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: postId
 *         description: ID of the post to fetch
 *         in: query
 *         required: true
 *         type: string
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.get('/post', function(req, res) {
	// This route needs to be ordered before /:postId since express will match '/post' to be path param as well
	var promise;
	try {
		promise = postService.getPost(req.query.postId);
		
		promise.then(function(data) {
			// Do something (if required) with the data, then send it to the client
			res.status(200).send(data);
		});

		promise.catch(function(error) {
			// Never send stack traces to the client.
			res.status(500).send(sampleError);
		});
	} catch (e) {
		// Use a good logging framework for logging to file
		res.status(500).send(sampleError);
	}
});

/**
 * @swagger
 * /posts/{postId}:
 *   get:
 *     summary: Get details of a post
 *     description: Returns details of a single post
 *     tags:
 *       - Posts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: postId
 *         description: ID of the post to fetch
 *         in: path
 *         required: true
 *         type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.get('/:postId', function(req, res) {
	try {
		var promise = postService.getPost(req.params.postId);

		promise.then(function(data) {
			// Do something (if required) with the data, then send it to the client
			res.status(200).send(data);
		});

		promise.catch(function(error) {
			// Never send stack traces to the client.
			console.log('/posts/' + postId + ' failed with error', error);
			res.status(500).send(sampleError);
		})

	} catch (e) {
		// Use a good logging framework for logging to file
		res.status(500).send(sampleError);
	}
});

module.exports = router;