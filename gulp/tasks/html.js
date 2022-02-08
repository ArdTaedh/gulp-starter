import gulp from "gulp"
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import browserSync from "browser-sync";

import path from "../config/path.js";

const html = () => {
    return gulp.src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(gulp.dest(path.html.result))
        .pipe(browserSync.stream())
}

export default html