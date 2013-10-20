module.exports = function (sails) {


	/**
	 * Module dependencies.
	 */

	var util	= require('../util'),
		async	= require('async');


	return function bindTeardownEvents () {
		process.on('SIGINT', function() {
			if(process.listeners('SIGINT').length > 1){
				sails.log.debug('User defined SIGINT handler present.');
				sails.log.debug('Run `sails.lower(process.exit)` to tear down sails.');
			}else{
				sails.lower(process.exit);
			}
		});
		process.on('SIGTERM', function() {
			if(process.listeners('SIGTERM').length > 1){
				sails.log.debug('User defined SIGTEM handler present.');
				sails.log.debug('Run `sails.lower(process.exit)` to tear down sails.');
			}else{
				sails.lower(process.exit);
			}
		});
		process.on('exit', function() {
			if(process.listeners('exit').length > 1){
				sails.log.debug('User defined exit handler present.');
				sails.log.debug('Run `sails.lower(process.exit)` to tear down sails.');
			}else{
				if (!sails._exiting) sails.lower();
			}
		});
	};

};
