/*
 * grunt-cfpathcheck
 * https://github.com/timbeadle/grunt-cfpathcheck
 *
 * Copyright (c) 2015 Tim Beadle
 * Licensed under the MIT license.
 */

/*global module, require */

module.exports = function (grunt) {

	'use strict';

	// load all npm grunt tasks
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		eslint: {
			src: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				configFile: '.eslintrc.json'
			}
		},

		'release-it': {
			options: {
				pkgFiles: ['package.json'],
				commitMessage: 'Release %s',
				tagName: '%s',
				tagAnnotation: 'Release %s',
				buildCommand: false
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		cfpathcheck: {
			default_options: {
				options: {},
				files: {
					'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
				}
			},
			custom_options: {
				options: {
					separator: ': ',
					punctuation: ' !!!'
				},
				files: {
					'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('gruntify-eslint');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	// grunt.registerTask('test', ['clean', 'cfpathcheck', 'nodeunit']);
	grunt.registerTask('test', ['eslint']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['test']);

};
