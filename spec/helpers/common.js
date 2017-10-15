exports.end = function(err, res, done) {
	if (err) {
		done.fail(err);
	}
	else {
		done();
	}
}