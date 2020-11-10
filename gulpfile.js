const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

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
