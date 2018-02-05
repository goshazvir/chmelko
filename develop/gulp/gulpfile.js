// --------------------------------------------------
// Include gulp and plugins
// --------------------------------------------------
var gulp                = require('gulp');
var plugins             = require("gulp-load-plugins")();


plugins.debug           = require('gulp-debug');
plugins.del             = require('del');
plugins.vinylPaths      = require('vinyl-paths');


var sass                = require('gulp-sass');
var uglify              = require('gulp-uglify');
var pump                = require('pump');
var cleanCSS            = require('gulp-clean-css');
var sourcemaps          = require('gulp-sourcemaps');
var autoprefixer        = require('gulp-autoprefixer');
// --------------------------------------------------
//[TASKS]
// --------------------------------------------------
gulp.task('default:theme-build', function(cb) {

    return gulp.src('../style/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest('../../static/css/'))
});
// --------------------------------------------------
// Watch Theme
// --------------------------------------------------
gulp.task('default:theme-watch', function() {
    gulp.watch('../style/*.scss', ['default:theme-build']);
});
