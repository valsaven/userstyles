const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

gulp.task('default', () => {
  del(['dist/**', '!dist']).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });

  return gulp
    .src(['!node_modules/**/*.scss', './**/*.scss'])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
  gulp.watch('./**/*.scss', ['default']);
});
