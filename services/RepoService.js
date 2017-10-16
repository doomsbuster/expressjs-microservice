'use strict';
var repoDAO = require('../dataaccess/RepoDao');

module.exports = {
	getAllRepos: function() {
		let repos = repoDAO.getAllRepos();
	}
}