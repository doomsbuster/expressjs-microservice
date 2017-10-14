'use strict';
module.exports = {
	mySampleGetService:function(name) {
		try {
			return name;
		} catch (e) {
			// Throw named / typed errors here e.g. NotAuthorizedError. This simplifies route exception handling by throwing appropriate HTTP
			// response based on the Typed Error
			throw new Error('Internal Server Error');
		} finally {
			// Perform service cleanup here.
		}
	}
}