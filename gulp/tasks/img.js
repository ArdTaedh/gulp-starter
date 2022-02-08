import gulp from "gulp"
import gulpIf from "gulp-if"
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import newer from 'gulp-newer'
import imageMin from 'gulp-imagemin'

import path from "../config/path.js";
import app from "../config/app.js";


const img = () => {
    return gulp.src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Image",
                message: error.message
            }))
        }))
        .pipe(newer(path.img.result))
        .pipe(gulpIf(app.isProd, imageMin(app.imagemin)))
        .pipe(gulp.dest(path.img.result))
}

export default img