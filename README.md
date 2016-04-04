# grunt-cfpathcheck

> Grunt wrapper for cfpathcheck

[![npm version](https://img.shields.io/npm/v/grunt-cfpathcheck.svg)](https://www.npmjs.com/package/grunt-cfpathcheck)
[![Downloads/month](https://img.shields.io/npm/dm/grunt-cfpathcheck.svg)](https://www.npmjs.com/package/grunt-cfpathcheck)
[![Build Status](https://travis-ci.org/timbeadle/grunt-cfpathcheck.svg?branch=master)](https://travis-ci.org/timbeadle/grunt-cfpathcheck)
[![Dependency Status](https://david-dm.org/timbeadle/grunt-cfpathcheck.svg)](https://david-dm.org/timbeadle/grunt-cfpathcheck)

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
_(Nothing yet)_

## License
Copyright (c) 2015 Tim Beadle. Licensed under the MIT license.
