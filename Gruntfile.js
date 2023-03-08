module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		cfpathcheck: {
			options: {
				reporter: 'console',
			},
			files: {
				src: './node_modules/cfpathcheck/fixtures/test-template.cfm',
			},
		},
	});

	// Load the plugin that provides the "cfpathcheck" task.
	grunt.loadTasks('./tasks');

	grunt.registerTask('default', ['cfpathcheck']);
};
