let project_folder = 'dist';
let source_folder = 'src';


let path = {
  build: {
    html: project_folder + '/',
    css: project_folder + '/css/',
    js: project_folder + '/js/',
    img: project_folder + '/img/',
    fonts: project_folder + '/fonts/'
  },
  src: {
    html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
    css: source_folder + '/scss/style.scss',
    js: source_folder + '/js/script.js',
    img: source_folder + '/img/**/*',
    fonts: source_folder + '/fonts/*'
  },
  watch: {
    html: source_folder + '/**/*.html',
    css: source_folder + '/scss/**/*.scss',
    js: source_folder + '/js/**/*.js',
    img: source_folder + '/img/**/*',
    fonts: source_folder + '/fonts/*'
  }
}

let { src, dest } = require('gulp'),
  gulp = require('gulp'),
  browsersync = require('browser-sync').create(),
  fileinclude = require('gulp-file-include'),
  scss = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify-es').default,
  imagemin = require('gulp-imagemin');


function browserSync() {
  browsersync.init({
    server: {
      baseDir: './' + project_folder + '/'
    },
    port: 3000,
    notify: false
  })
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(scss({
      outputStyle: 'expanded'
    })
    )
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
      cascade: true
    }))
    .pipe(dest(path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: '.min.js'
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function images() {
  return src(path.src.img)
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true,
        optimizationLevel: 3 // 0 to 7
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

let build = gulp.series( gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.fonts = fonts
exports.images = images;
exports.js = js;
exports.html = html;
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = watch;