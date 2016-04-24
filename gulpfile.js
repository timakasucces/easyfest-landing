var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('build', function () {
	gulp.src([
			'bower_components/jquery/dist/jquery.js',
			'bower_components/bootstrap/dist/js/bootstrap.js',
			'bower_components/fullpage.js/dist/jquery.fullpage.js'
		])
	.pipe(concat('js/build.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./'))

	gulp.src([
			'bower_components/reset-css/reset.css',
			'bower_components/bootstrap/dist/css/bootstrap.css',
			'bower_components/font-awesome/css/font-awesome.css',
			'bower_components/fullpage.js/dist/jquery.fullpage.css',
			'css/main.css'
		])
	.pipe(concat('css/build.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('./'))

	gulp.src([
			'bower_components/font-awesome/fonts/fontawesome-webfont.*',
		])
	.pipe(gulp.dest('fonts/'))
});

gulp.task('default', function(){
	gulp.watch('css/main.css', function(){
		gulp.run('build');
	});

	// gulp.watch('js/**', function(){
	// 	gulp.run('build');
	// });
})