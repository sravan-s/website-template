const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('compile-scss', () => {
    return gulp
            .src('src/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('build/styles'));
});

gulp.task('compile-es6', () => {
    return gulp
            .src('src/javascript/*.js')
            .pipe(babel({
                presets: ['es2015']
            }))
            .pipe(gulp.dest('build/scripts'));
});

gulp.task('default', ['compile-scss', 'compile-es6']);
