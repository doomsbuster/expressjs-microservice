'use strict';

var express = require('express');
var imagesEndpoint = require('./images');
var router = express.Router();

router.use('/images', imagesEndpoint);

/**
 * @swagger
 * /repo:
 *   get:
 *     summary: Get list of all repositories
 *     description: Returns a list of all repositories
 *     tags:
 *       - Repo
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.use('/', function (req, res) {
	res.status(200).send({
		data: '/repo'
	})
});

module.exports = router;