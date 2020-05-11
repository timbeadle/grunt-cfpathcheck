# grunt-cfpathcheck

> Grunt wrapper for [cfpathcheck](https://github.com/timbeadle/cfpathcheck)

[![npm version](https://img.shields.io/npm/v/grunt-cfpathcheck.svg)](https://www.npmjs.com/package/grunt-cfpathcheck)
[![Downloads/month](https://img.shields.io/npm/dm/grunt-cfpathcheck.svg)](https://www.npmjs.com/package/grunt-cfpathcheck)
[![Build Status](https://travis-ci.com/timbeadle/grunt-cfpathcheck.svg?branch=master)](https://travis-ci.com/timbeadle/grunt-cfpathcheck)
[![Dependency Status](https://david-dm.org/timbeadle/grunt-cfpathcheck.svg)](https://david-dm.org/timbeadle/grunt-cfpathcheck)
[![devDependency Status](https://david-dm.org/timbeadle/grunt-cfpathcheck/dev-status.svg)](https://david-dm.org/timbeadle/grunt-cfpathcheck#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/timbeadle/grunt-cfpathcheck/badges/gpa.svg)](https://codeclimate.com/github/timbeadle/grunt-cfpathcheck)
[![DepShield Badge](https://depshield.sonatype.org/badges/timbeadle/grunt-cfpathcheck/depshield.svg)](https://depshield.github.io)
[![Known Vulnerabilities](https://snyk.io/test/github/timbeadle/grunt-cfpathcheck/badge.svg)](https://snyk.io/test/github/timbeadle/grunt-cfpathcheck)

## About grunt-cfpathcheck

[cfpathcheck](https://github.com/timbeadle/cfpathcheck) is a static code analysis utility for finding incorrect/missing file paths and unused imported taglib namespaces in cfml (Adobe ColdFusion/Lucee/Railo/OpenBD) files.

The grunt-cfpathcheck plugin for grunt integrates this analysis into the grunt process.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cfpathcheck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cfpathcheck');
```

## The "cfpathcheck" task

### Overview
In your project's Gruntfile, add a section named `cfpathcheck` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cfpathcheck: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.reporter
Type: `String`
Default value: `console`

The preferred reporter style that will be used in stdout.

#### options.outFile
Type: `String`
Default value: `undefined`

The path to the desired output file containing the checkstyle-compatible result data.

### Usage Examples

#### Default Options
In this example, the default options are used to output analysis results to stdout, without saving the results to a file.

```js
grunt.initConfig({
  cfpathcheck: {
    options: {},
    files: {
      'src': '..'
    },
  },
})
```

#### Custom Options
In this example, custom options are used to output checkstyle-compatible xml to stdout and write the results to a file as well.

```js
grunt.initConfig({
  cfpathcheck: {
    options: {
      reporter: 'checkstyle',
      outFile: 'path/to/results.xml',
    },
    files: {
      'src': '..'
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
See [CHANGELOG](https://github.com/timbeadle/grunt-cfpathcheck/blob/master/CHANGELOG.md).

## License
Copyright (c) 2015-2019 Tim Beadle. Licensed under the MIT license.
