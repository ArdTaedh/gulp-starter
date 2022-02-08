import gulp from "gulp"
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import autoPrefixer from "gulp-autoprefixer"
import groupMediaQueries from "gulp-group-css-media-queries"
import sass from 'sass'
import gulpSass from "gulp-sass"

import path from "../config/path.js";
import app from "../config/app.js";

const convertedSass = gulpSass(sass)

const scss = () => {
    return gulp.src(path.scss.src, { sourcemaps:  app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe(convertedSass())
        .pipe(autoPrefixer())
        .pipe(groupMediaQueries())
        .pipe(gulp.dest(path.scss.result, { sourcemaps:  app.isDev}))
}

export default scss