const isProd = process.argv.includes("--production")
const isDev = !isProd

export default {
    isDev: isDev,
    isProd: isProd,
    webpack: {
        mode: isProd ? "production" : "development"
    },
    imagemin: {
        verbose: true
    }
}