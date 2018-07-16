# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).

## [2.0.0] - 2018-07-16
### Added
- node_js version 10 support in .travis.yml
- some es6 syntax features (arrow functions, let & const)

### Updated
- cfpathcheck@2.0.0
- eslint@5.1.0
- eslint-config-prettier@2.9.0
- eslint-plugin-jsdoc@3.7.1
- eslint-plugin-node@6.0.1
- prettier@1.13.7

### Removed
- node_js 4 & 5 support - minimum supported version is now 6
- grunt & plugins

## [1.2.0] - 2017-11-21
### Added
- node_js versions 8 and 9 support in .travis.yml
- eslint
- eslint-config-prettier
- grunt
- prettier

### Updated
- eslint-plugin-jsdoc@3.2.0
- eslint-plugin-node@5.2.1
- grunt-contrib-clean@1.1.0
- grunt-eslint@20.1.0
- load-grunt-tasks@3.5.2
- cfpathcheck@1.5.0

### Removed
- eslint:recommended ruleset

## [1.1.1] - 2016-11-05
### Added
- node v7 support in .travis.yml
### Updated
- cfpathcheck@1.2.1 (upgraded dependencies)

## [1.1.0] - 2016-10-03
### Updated
- cfpathcheck@1.2.0 (Adds support for single quotes delimiting `<cfimport>` and `<cfinclude>` attributes)

## [1.0.1] - 2016-08-19
### Updated
- cfpathcheck@1.1.1

## [1.0.0] - 2016-08-17
### Added
- CHANGELOG.md (this file)

### Updated
- cfpathcheck@1.1.0

### Removed
- node 0.10, 0.12 support. grunt-cfpathcheck now requires node >=4

## [0.6.0] - 2016-08-17
### Updated
- cfpathcheck@0.8.0 - cfscript include path support


## [0.5.0] - 2016-04-04
### Added
- Travis setup.
- Project badges.

## [0.4.0] - 2016-04-01
### Added
- TravisCI build badge.

[2.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/1.2.0...2.0.0
[1.2.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/0.6.0...1.0.0
[0.6.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/0.5.0...0.6.0
[0.5.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/0.4.0...0.5.0
[0.4.0]: https://github.com/timbeadle/grunt-cfpathcheck/commit/964490c0a2838c158de4c199be4e0951778c2738

(Sorry - only started tagging releases at 0.4.0)
