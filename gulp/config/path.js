const pathSrc = "./src"
const pathResult = './dist'

export default {
    root: pathResult,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        result: pathResult
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        result: pathResult + "/css"
    },
    scss: {
        src: pathSrc + "/scss/*.{sass,scss}",
        watch: pathSrc + "/scss/**/*.{sass,scss}",
        result: pathResult + "/css"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        result: pathResult + "/js"
    },
    img: {
        src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        result: pathResult + "/img"
    },
}