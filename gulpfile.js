const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const tinify = require('gulp-tinify');
const rename = require('gulp-rename');

// Сжатие css файлов
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('build/css/'))
});

// Перенос и сжатых js файлов
gulp.task('move-js', () => {
  return gulp.src('src/js/*.min.js')
  .pipe(gulp.dest('build/js'))
});

// Перенос и сжатие js-файлов
gulp.task('minify-js', () => {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
  .pipe(jsmin())
  // .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('build/js'))
});

// Сжатие и перенос html файлов
gulp.task('htmlmin', () => {
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build/'))
});

// Перенос шрифтов
gulp.task('move-fonts', () => {
  return gulp.src('src/fonts/**/*.*')
  .pipe(gulp.dest('build/fonts'))
});

// Сжатие и перенос картинок
gulp.task('imagemin', () => {
  return gulp.src('src/img/**/*.*')
  .pipe(tinify('mfmpwGzQZWQ0TB6XwDv9tb31b8blLhRq'))
  .pipe(gulp.dest('build/img'))
});

// Перенос phpmailer
gulp.task('move-phpmailer', () => {
  return gulp.src('src/phpmailer/*.*')
  .pipe(gulp.dest('build/phpmailer'))
});
//
gulp.task('move-php', () => {
  return gulp.src('src/*.php')
  .pipe(gulp.dest('build/'))
});

gulp.task('build', gulp.series('minify-css', 'move-js', 'htmlmin', 'minify-js', 'move-fonts', 'move-phpmailer', 'move-php'));