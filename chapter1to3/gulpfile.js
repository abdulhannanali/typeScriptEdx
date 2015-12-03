var gulp = require("gulp");
var ts = require("gulp-typescript");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

var tsPath = "typescript/*.ts";


gulp.task("typescript", function () {
  var tsResult = gulp.src("typescript/*.ts")
    .pipe(ts({}));

  tsResult.js.pipe(gulp.dest("release/js"));
  tsResult.dts.pipe(gulp.dest("release/dts"));
})

gulp.task("javascript", function () {
  return gulp.src("./release/js/*.js")
    .pipe(concat("all.js"))
    .pipe(gulp.dest("./release/js/build/"))
})

gulp.task("compress", function () {
  return gulp.src("./release/js/build/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./release/dist/js/"));
})

gulp.task("watch", function () {
  gulp.watch([tsPath], ["typescript", "javascript"]);
})


gulp.task("default", ["watch", "typescript", "javascript"]);
