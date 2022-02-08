import gulp from "gulp";
import path from "../config/path.js";
import html from "./html.js";
import scss from "./scss.js";
import js from "./js.js";
import img from "./img.js";

const watcher = () => {
    gulp.watch(path.html.watch, html)
    gulp.watch(path.scss.watch, scss)
    gulp.watch(path.js.watch, js)
    gulp.watch(path.img.watch, img)
}

export default watcher