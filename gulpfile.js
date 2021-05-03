var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
//var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
//var streamqueue = require('streamqueue');
//var cssmin = require('gulp-cssmin');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var order = require("gulp-order");
//var flatten = require('gulp-flatten');
//var replace = require('gulp-replace');
//var fs = require('fs');

var sitecodename = "aonAssessment";

gulp.task('scss', function ()
{
 return gulp.src('./src/scss/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({ browsers: ['last 5 versions'] }))
  .pipe(cssnano())
  .pipe(gulp.dest('./output/css'));
});


gulp.task('js', function () 
{
    return gulp.src([
	    './src/js/**/*.js'])
	 .pipe(order([
		'src/js/vendors/jquery.js',
		'src/js/vendors/jquery.flexslider.js',
		'src/js/vendors/matchHeight.js',
		'src/js/app/humanCapitalBase.js',
		'src/js/app/humanCapitalCommonV2.js',
		'src/js/app/assessmentNavigationV2.js',
		'src/js/app/assessmentMain.js'
	 ], { base: './' }))
	 .pipe(concat(sitecodename + '.min.js'))
	 .pipe(uglify({
	   preserveComments: 'license',
	   compress: { hoist_funs: false }
	}))
     .pipe(gulp.dest('./output/js'));
});


//run

gulp.task('watch', function () 
{
    gulp.start('default');

    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/js/**/*', ['js']);
});


gulp.task('default', ['scss','js']);