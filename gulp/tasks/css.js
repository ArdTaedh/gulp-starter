import gulp from "gulp"
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import autoPrefixer from "gulp-autoprefixer"
import groupMediaQueries from "gulp-group-css-media-queries"

import path from "../config/path.js";
import app from "../config/app.js";

const css = () => {
    return gulp.src(path.css.src, { sourcemaps:  app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "CSS",
                message: error.message
            }))
        }))
        .pipe(autoPrefixer())
        .pipe(groupMediaQueries())
        .pipe(gulp.dest(path.css.result, { sourcemaps:  app.isDev}))
}

export default css