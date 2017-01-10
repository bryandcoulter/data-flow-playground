'use strict';
const connect = require('gulp-connect');
const gulp = require('gulp');
const source = require('vinyl-source-stream');


gulp.task('connect', () => {
  connect.server({
    root: '',
    livereload: false
  });
});
