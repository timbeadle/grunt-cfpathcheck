/*
 * Grunt wrapper for cfpathcheck - grunt-cfpathcheck
 * https://github.com/timbeadle/grunt-cfpathcheck
 *
 * Copyright (c) 2015 Tim Beadle
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask(
		'cfpathcheck',
		'Grunt wrapper for cfpathcheck',
		function () {
			// Merge task-specific and/or target-specific options with these defaults.
			const options = this.options({
				reporter: 'console',
				outFile: undefined,
			});

			let file;

			if (this.filesSrc.length === 1) {
				file = this.filesSrc[0];
			}

			const done = this.async();

			(async function () {
				// @see https://dev.to/adamcoster/commonjs-and-esm-importexport-compatibility-by-simple-example-50pl
				const cfpathcheck = (await import('cfpathcheck/lib/cfpathcheck.js'));

				// Iterate over all specified file groups.
				if (typeof file !== 'undefined') {
					const violations = cfpathcheck.check(file, 'json');
					const output = cfpathcheck.formatter(violations, options.reporter);

					cfpathcheck.writeOutput(output);

					if (options.outFile) {
						cfpathcheck.writeFile(
							cfpathcheck.formatter(violations, 'checkstyle'),
							options.outFile,
						);
					}
				}

				done(true);
			})();
		},
	);
};
