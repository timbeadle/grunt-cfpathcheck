# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/).

## [9.0.0] - 2023-09-26
### Updated
- cfpathcheck@9.0.0
- Volta pin node@16.20.2, npm@9.8.1

### Removed
- Breaking: NodeJS support <16.14
- NodeJS 14.x, 14.17.x test runs
- .github/workflows/codeql.yml

## [8.0.2] - 2023-09-26
### Updated
- @snyk/protect@1.1227.0
- eslint@8.50.0
- eslint-plugin-import@2.28.1
- prettier@3.0.3
- npm@8.19.4 (volta pin)
- actions/checkout@v4

## [8.0.1] - 2023-07-06
### Added
- Node 14.17.x, 20.x test runs
- Volta pin node@14.17.6, npm@7.24.2
- Renovate baseBranches config

### Updated
- @snyk/protect@1.1187.0
- cfpathcheck@8.1.3
- eslint@8.44.0
- grunt@1.6.1
- prettier@3.0.0

## [8.0.0] - 2023-03-23
### Updated
- @snyk/protect@1.1125.0
- cfpathcheck@8.1.0
- prettier@2.8.6

### Removed
- Breaking: NodeJS support <14.17
- `amd: true` from eslint `import/no-unresolved` rule

## [7.0.1] - 2023-03-20
### Updated
- eslint@8.36.0
- eslint-plugin-redos@4.4.5
- prettier@2.8.5

## [7.0.0] - 2023-02-07
### Updated
- cfpathcheck@7.0.0
- eslint@8.33.0
- eslint-config-xo@0.43.1
- eslint-plugin-import@2.27.5
- eslint-plugin-redos@4.4.3
- ls-engines@0.9.0
- prettier@2.8.3

### Removed
- Breaking: NodeJS support <14.13
- NodeJS 12.x test run

## [6.0.1] - 2022-10-25
### Updated
- cfpathcheck@6.0.0

## [6.0.0] - 2022-10-25
### Added
- NodeJS v19 test run
- eslint redos plugin
- Gruntfile.js and shell script for testing the Grunt task

### Updated
- async import mechanism for esm version of cfpathcheck
- actions/checkout@v3
- github/codeql-action/init@v2
- github/codeql-action/autobuild@v2
- github/codeql-action/analyze@v2
- actions/setup-node@v3
- @snyk/protect@1.1041.0
- cfpathcheck@5.1.0
- eslint@8.26.0
- eslint-config-xo@0.42.0
- eslint-plugin-import@2.26.0
- eslint-plugin-redos@4.4.1
- grunt@1.5.3
- ls-engines@0.7.0
- prettier@2.7.1

### Removed
- Breaking: NodeJS support <12.17

## [5.0.0] - 2022-05-03
### Added
- @snyk/protect
- eslint
- eslint-config-xo
- eslint-plugin-import
- ls-engines
- nodejs v16, v18 test runs
- dependabot

### Updated
- prettier@2.6.2
- link to CHANGELOG (points at main branch)

### Removed
- snyk
- xo
- nodejs v10 support (nodejs v12 is now the minimum supported version)
- TravisCI build

## [4.2.1] - 2021-04-24
### Updated
- Revert to function() instead of fat arrow functions to preserve `this`

## [4.2.0] - 2020-10-21
## Added
- node_js 15 support

## Updated
- cfpathcheck@4.4.0
- prettier@2.1.2
- snyk@1.419.0
- xo@0.34.1

## [4.1.0] - 2020-07-05
### Added
- Github workflow for running tests
- node_js v14 support
- travis-ci.com for test and build

### Updated
- cfpathcheck@4.2.0
- prettier@2.0.5
- snyk@1.360.0
- xo@0.32.1

### Removed
- Greenkeeper badge (retired)
- travis-ci.org test/build

## [4.0.0] - 2020-02-23
### Added
- xo linter
- node_js 13 support

### Updated
- cfpathcheck@4.0.0
- prettier@1.19.1
- snyk@1.296.0

### Removed
- eslint
- node_js 8 and 9 support

## [3.0.3] - 2019-10-13
### Updated
- cfpathcheck@3.0.6
- eslint@6.5.1
- eslint-config-prettier@6.4.0
- eslint-plugin-jsdoc@15.11.0
- eslint-plugin-prettier@3.1.1
- snyk@1.234.2

## [3.0.2] - 2019-09-06
### Added
- .codeclimate.yml to .npmignore
- Greenkeeper.io badge
- `snyk protect` script

### Updated
- eslint@6.3.0
- eslint-config-prettier@6.2.0
- eslint-plugin-jsdoc@15.9.1
- eslint-plugin-node@10.0.0
- prettier@1.18.2
- snyk@1.226.0 (devDependencies -> dependencies)


## [3.0.1] - 2019-05-26
### Updated
- cfpathcheck@3.0.3

## [3.0.0] - 2019-05-25
### Added
- Snyk badge

### Updated
- cfpathcheck@3.0.2
- eslint@5.16.0
- eslint-config-prettier@4.3.0
- eslint-plugin-jsdoc@7.0.2
- eslint-plugin-node@9.1.0
- eslint-plugin-prettier@3.1.0
- prettier@1.17.1
- snyk@1.167.2

### Removed
- node_js 6 and 7 support - minimum supported version is now 8

## [2.0.1] - 2019-02-11
### Added
- Snyk monitoring
- DepShield badge
- node 11 support in .travis.yml
- eslint-plugin-prettier

### Updated
- eslint: rules tweaked to extend prettier, with overrides
- eslint@5.13.0
- eslint-config-prettier@4.0.0
- eslint-plugin-jsdoc@4.1.0
- eslint-plugin-node@8.0.1
- eslint-plugin-prettier@3.0.1
- prettier@1.16.4


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

[9.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/8.0.2...9.0.0
[8.0.2]: https://github.com/timbeadle/grunt-cfpathcheck/compare/8.0.1...8.0.2
[8.0.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/8.0.0...8.0.1
[8.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/7.0.1...8.0.0
[7.0.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/7.0.0...7.0.1
[7.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/6.0.1...7.0.0
[6.0.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/6.0.0...6.0.1
[6.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/5.0.0...6.0.0
[5.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/4.2.1...5.0.0
[4.2.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/4.2.0...4.2.1
[4.2.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/4.1.0...4.2.0
[4.1.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/4.0.0...4.1.0
[4.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/3.0.3...4.0.0
[3.0.3]: https://github.com/timbeadle/grunt-cfpathcheck/compare/3.0.2...3.0.3
[3.0.2]: https://github.com/timbeadle/grunt-cfpathcheck/compare/3.0.1...3.0.2
[3.0.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/3.0.0...3.0.1
[3.0.0]: https://github.com/timbeadle/grunt-cfpathcheck/compare/2.0.1...3.0.0
[2.0.1]: https://github.com/timbeadle/grunt-cfpathcheck/compare/2.0.0...2.0.1
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
