"use strict";

let gulp = require('gulp');
let browsersync = require('browser-sync').create();
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');


// Gulp Default Task
gulp.task('default', ['serve']);


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browsersync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  });

  gulp.watch("sass/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browsersync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      onError: function(err) {
        return console.log(err);
      }
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("static/css"))
    .pipe(browsersync.stream());
});