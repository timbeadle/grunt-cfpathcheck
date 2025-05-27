# grunt-cfpathcheck

> Grunt wrapper for [cfpathcheck](https://github.com/timbeadle/cfpathcheck)

[![npm version](https://img.shields.io/npm/v/grunt-cfpathcheck.svg)](https://www.npmjs.com/package/grunt-cfpathcheck)
[![Downloads/month](https://img.shields.io/npm/dm/grunt-cfpathcheck.svg)](https://www.npmjs.com/package/grunt-cfpathcheck)
[![Build Status](https://github.com/timbeadle/grunt-cfpathcheck/workflows/Node.js%20CI/badge.svg)](https://github.com/timbeadle/grunt-cfpathcheck)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Code Climate](https://codeclimate.com/github/timbeadle/grunt-cfpathcheck/badges/gpa.svg)](https://codeclimate.com/github/timbeadle/grunt-cfpathcheck)
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
See [CHANGELOG](https://github.com/timbeadle/grunt-cfpathcheck/blob/main/CHANGELOG.md).

### Release support matrix

| Release | Min Node ver. | Support     |
| ------- | ------------- | ----------- |
| 1.x     | 4.0.0         | Obsolete    |
| 2.x     | 6.0.0         | Obsolete    |
| 3.x     | 8.0.0         | Obsolete    |
| 4.x     | 12.0.0        | Obsolete    |
| 5.x     | 12.0.0        | Obsolete    |
| 6.x     | 12.17.0       | Obsolete    |
| 7.x     | 14.13.0       | Obsolete    |
| 8.x     | 14.17.0       | Obsolete    |
| 9.x     | 16.14.0       | Obsolete    |
| 10.x    | 18.0.0        | Maintenance |
| 11.x    | 20.0.0        | Current     |

## License
Copyright (c) 2015-2019 Tim Beadle. Licensed under the MIT license.
