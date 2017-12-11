var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var del = require('del');

gulp.task('default', function () {

    del(['dist/**', '!dist']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });

    return gulp.src([
            '!node_modules/**/*.scss',
            './**/*.scss',
        ])
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
});
