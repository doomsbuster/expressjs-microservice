'use strict';

var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /repo/images:
 *   get:
 *     summary: Get a list of images
 *     description: Returns a list of all images
 *     tags:
 *       - Images
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
		'data': '/repo/images/'
	});	
});

/**
 * @swagger
 * /repo/images/{imageid}:
 *   get:
 *     summary: Get the details about an image
 *     description: Returns details of a single image
 *     tags:
 *       - Images
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: imageid
 *         description: ID of the post to fetch
 *         in: path
 *         required: true
 *         type: string
 *         example: IMG_1234
 *     responses:
 *       200:
 *         description: Successful
 *       500:
 *         description: Server Error
 */
router.use('/:imageid', function (req, res) {
	res.status(200).send({
		'data': '/repo/images/'+ req.params.imageid
	});
});

module.exports = router;