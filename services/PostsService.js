'use strict';
var request = require('request-promise-native');

module.exports = {
	getAllPosts: function() {
		let options = {
			url: 'https://jsonplaceholder.typicode.com/posts'
		}
		return request.get(options);
	},
	getPost: function(postId) {
		console.log('PostService::getPost()' + postId);
		let options = {
			url: 'https://jsonplaceholder.typicode.com/posts/' + postId
		}
		return request.get(options);
	}
}