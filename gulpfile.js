'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var paths = {
    tests: ['test/**/**.js'],
    scripts: ['lib/**', 'test/**']
};

/**
 * - Gulp task for linting all js scripts
 */

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish', { verbose: true }));
});


/**
 * Gulp task to run tests
 *
 */

gulp.task('test', function() {
    return gulp.src(paths.tests, { read: false })
        // The reporter can be changed to preferable one
        .pipe(plugins.mocha( /*{ reporter: 'list' }*/ ));
});


/**
 * Watch for changes and lint in all ours scripts and lints
 */
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['lint']);
});


/**
 * Start gulp
 */

gulp.task('default', ['lint', 'watch']);
