'use strict';
var request = require('request-promise-native');

module.exports = {
	getAllPosts: function() {
		let options = {
			url: 'https://jsonplaceholder.typicode.com/posts'
		}
		console.log('Getting all posts here');
		return request.get(options);
	},
	getPost: function(postId) {
		let options = {
			url: 'https://jsonplaceholder.typicode.com/posts/' + postId
		}
		console.log('Getting your post ID here');
		return request.get(options);
	}
}