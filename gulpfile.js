const fileinclude = require("gulp-file-include");
const gulp = require("gulp");

function projects() {
	console.log("Copying projects...");
	return gulp
		.src("./src/developer/**/**.*")
		.pipe(gulp.dest("./docs/developer/"));
}
function assets() {
	console.log("Copying assets...");
	return gulp.src("./src/assets/**").pipe(gulp.dest("./docs/assets"));
}
function css() {
	console.log("Copying css...");
	return gulp.src("./src/css/*.css").pipe(gulp.dest("./docs/css"));
}
function js() {
	console.log("Copying js...");
	return gulp.src("./src/js/*.js").pipe(gulp.dest("./docs/js"));
}

gulp.task("default", function () {
	//https://www.npmjs.com/package/gulp-file-include --- @@include('./filename')
	css();
	js();
	assets();
	return gulp
		.src(["./src/*.html"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(gulp.dest("./docs"));
});

gulp.task("npm-release", function () {
	//Build first in package.json commands - Create NPM packets
	return gulp.src("./src").pipe(plugin()).pipe(gulp.dest("./release"));
});
