var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('babbling', function() {
	console.log('babel call?')
	gulp.src("src/app.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"));
});

gulp.task("default", function () {
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('src/**/*.js',['babbling']);
	});