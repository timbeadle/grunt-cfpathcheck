/*
 * grunt-cfpathcheck
 * https://github.com/timbeadle/grunt-cfpathcheck
 *
 * Copyright (c) 2015 Tim Beadle
 * Licensed under the MIT license.
 */

/*global module, require */

module.exports = function(grunt) {
  "use strict";

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask(
    "cfpathcheck",
    "Grunt wrapper for cfpathcheck",
    function() {
      var cfpathcheck = require("cfpathcheck/lib/cfpathcheck");

      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
        reporter: "console",
        outFile: undefined
      });
      var file;

      if (this.filesSrc.length === 1) {
        file = this.filesSrc[0];
      }

      // Iterate over all specified file groups.
      if (typeof file !== "undefined") {
        var violations = cfpathcheck.check(file, "json");
        var output = cfpathcheck.formatter(violations, options.reporter);

        cfpathcheck.writeOutput(output);

        if (options.outFile) {
          cfpathcheck.writeFile(
            cfpathcheck.formatter(violations, "checkstyle"),
            options.outFile
          );
        }
      }
    }
  );
};
