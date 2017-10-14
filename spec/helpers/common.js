exports.end = function(err, res, done) {
	if (err) {
		console.log(err);
		done.fail(err);
	}
	else
		done();
}