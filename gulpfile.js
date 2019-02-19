const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

sass.compiler = require('node-sass');

gulp.task('default', () => {
  del(['dist/**', '!dist']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });

  return gulp
    .src(['scss/**/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('./**/*.scss', gulp.parallel('default'));
});
