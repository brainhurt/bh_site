/**
* Gulpfile.js
* Author: @Brainhurt Team
*/

/********************************** Setup Section *******************************************/
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');
console.log(plugins.util.env.production);	// Log to console env.mode ? production : development;

/**********************************Set Build Variables *******************************************/
var config = {
	assetsDir: 'src/res',
	sassPattern: 'styles/**/*.scss',
	production: !!plugins.util.env.production,
	sourceMaps: !plugins.util.env.production,
	bowerDir: 'vendor/bower_components'
};
var app = {};

/********************************** App CSS Build *******************************************/
app.addStyle = function(paths, outputFilename) {
	gulp.src(paths)
		.pipe(plugins.plumber())
		.pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
		.pipe(plugins.sass())
		.pipe(plugins.concat('css/'+outputFilename))
		.pipe(config.production ? plugins.minifyCss() : plugins.util.noop())
		.pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
		.pipe(gulp.dest('app/web'));
};


/********************************** App JS Build *******************************************/
app.addScript = function(paths, outputFilename) {
	gulp.src(paths)
		.pipe(plugins.plumber())
		.pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.init()))
		.pipe(plugins.concat('js/'+outputFilename))
		.pipe(config.production ? plugins.uglify() : plugins.util.noop())
		.pipe(plugins.if(config.sourceMaps, plugins.sourcemaps.write('.')))
		.pipe(gulp.dest('app/web'));
};

/**************************  Copy source->output dir ******************************/
app.copy = function(srcFiles, outputDir) {
	gulp.src(srcFiles)
		.pipe(gulp.dest(outputDir));
};

/**************************  Compile Sass & Minfiy into CSS ******************************/
gulp.task('styles', function() {
	app.addStyle([
		config.bowerDir+'/bootstrap/dist/css/bootstrap.css',
		config.bowerDir+'/font-awesome/css/font-awesome.css'
	], 'main.css');

	app.addStyle([
		config.assetsDir+'/styles/loader.css',
		config.assetsDir+'/styles/normalize.css',
		config.assetsDir+'/styles/styles.css'
	], 'home.css');
});

/************************** Compile & Minify Javascript******************************/
gulp.task('scripts', function() {
	app.addScript([
		config.bowerDir+'/jquery/dist/jquery.js',
		config.assetsDir+'/scripts/*'
	], 'site.js');
});

/********************************** Copy Fonts *******************************************/
gulp.task('fonts', function() {
	app.copy(
		config.bowerDir+'/font-awesome/fonts/*',
		'app/web/fonts'
	);
});

/********************************** Optimize and Copy Images *******************************************/
gulp.task('image-opt', function() {
	gulp.src(config.assetsDir+'/images/*')
		.pipe(plugins.imagemin())
		.pipe(gulp.dest('app/web/images'));
	
});

/********************************** Copy index.html *******************************************/
gulp.task('copy-index-html', function(){
	app.copy(
		'src/**/*.html',
		'app/'
	);
});

/********************************** Clean *******************************************/
gulp.task('clean', function() {
	del.sync('app/web/css/*');
	del.sync('app/web/scripts/*');
	del.sync('app/web/fonts/*');
	del.sync('app/web/images/*');
});

/**************************  Watch for CSS changes ******************************/
gulp.task('watch', function() {
	gulp.watch(config.assetsDir+'/'+config.sassPattern, ['styles']);
	gulp.watch(config.assetsDir+'/scripts/**/*.js', ['scripts']);
});

/********************************** Gulp Default  *******************************************/
gulp.task('default', ['clean', 'styles', 'scripts','fonts','image-opt','copy-index-html','watch']);
