import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

export function styles() {
  return gulp.src('source/sass/style.scss', { sourcemaps: true }) //style.scss
    .pipe(plumber()) //обработка ошибок
    .pipe(sass().on('error', sass.logError)) //style.scss -> style.css
    .pipe(postcss([
      autoprefixer() //style.scss -> style.css[prefix]
      ,

      csso() //style.scss[prefix] -> style.css[prefix, min]
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('source/css', { sourcemaps: '.' })) //sourse/css
    .pipe(browser.stream());
}
