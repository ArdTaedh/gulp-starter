import gulp from "gulp"
import webpack from "webpack-stream"
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import babel from 'gulp-babel'

import path from "../config/path.js";
import app from "../config/app.js";

const js = () => {
    return gulp.src(path.js.src, { sourcemaps:  app.isDev})
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack({
            mode: app.webpack.mode
        }))
        .pipe(gulp.dest(path.js.result, { sourcemaps:  app.isDev}))
}

export default js