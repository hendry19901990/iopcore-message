'use strict';

var gulp = require('gulp');
var iopcoreTasks = require('iopcore-build');

iopcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
