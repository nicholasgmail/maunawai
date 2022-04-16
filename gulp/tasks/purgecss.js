import purgeCssMin from "gulp-purgecss"

// минификация bootstrap css
export const purgecss = async () => {
    try {
        return await app.gulp.src(app.path.build.css + '/bootstrap.*css')
            .pipe(app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "PURGE CSS",
                    message: "Error: <%= error.message %>"
                })
            ))
            .pipe(purgeCssMin({
                content: ['dist/*.html']
            }))
            .pipe(app.gulp.dest('dist/assets/css'));
    } catch (error) {
        throw new Error(`purge css ` + error);
    }
}