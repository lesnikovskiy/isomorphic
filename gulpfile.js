const gulp = require('gulp');
const babel = require('gulp-babel');
const nodemon = require('gulp-nodemon');
const sequence = require('run-sequence');

gulp.task('compile', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/**/*.js', ['compile']);
	gulp.watch('src/**/*.html', ['copy']);
});

gulp.task('start', function() {
	nodemon({
		watch: 'dist',
		script: 'dist/index.js',
		ext: 'js',
		env: { 'NODE_ENV': 'development' }
	});
});

gulp.task('default', function(callback) {
	sequence(['compile', 'watch', 'copy'], 'start', callback);
});