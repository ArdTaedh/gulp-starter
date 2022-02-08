import gulp from 'gulp'

import clear from "./gulp/tasks/clear.js"
import html from "./gulp/tasks/html.js"
import scss from "./gulp/tasks/scss.js"
import js from "./gulp/tasks/js.js"
import img from "./gulp/tasks/img.js"
import server from "./gulp/tasks/server.js"
import watcher from "./gulp/tasks/watcher.js";

import app from "./gulp/config/app.js";

const build = gulp.series(
    clear,
    gulp.parallel(html, scss, js, img),
)

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
)

export default app.isProd ? build : dev