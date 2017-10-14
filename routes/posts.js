'use strict';
import express from 'express';
import postService from '../services/PostsService';

let router = express.Router();
let sampleError = {
	type: 'ErrorType'
	message: 'Error occured',
	messageCode: 1052 // Optional message code (numeric)
};

router.use('/', function(req, res) {
	try {
		var promise = postsService.getAllPosts();

		promise.then(function(data) {
			// Do something (if required) with the data, then send it to the client
			res.send(200).send(data);
		});

		promise.catch(function(error) {
			// Never send stack traces to the client.
			res.status(500).send(sampleError);
		});
	} catch (e) {
		// Use a good logging framework for logging to file
		console.log('Route /posts/ failed with error', e);
		res.status(500).send(sampleError);
	}
});

router.use('/:postId', function(req, res) {
	try {
		var promise = postsService.getPost(req.params.postId);

		promise.then(function(data) {
			// Do something (if required) with the data, then send it to the client
			res.send(200).send(data);
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

router.use('/post', function(req, res) {
	try {
		var promise = postsService.getPost(req.query.postId);
		
		promise.then(function(data) {
			// Do something (if required) with the data, then send it to the client
			res.send(200).send(data);
		});

		promise.catch(function(error) {
			// Never send stack traces to the client.
			res.status(500).send(sampleError);
		});
	} catch (e) {
		// Use a good logging framework for logging to file
		console.log('Route /posts/?postId=' + req.query.postId + ' failed with error', e);
		res.status(500).send(sampleError);
	}
});

module.exports = router;