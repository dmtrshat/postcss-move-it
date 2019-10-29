# Postcss-move-it

<img align="right" width="95" height="95"
     alt="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg" />

### Postcss-move-it adds keyframes by animation name. <br> Inspired by `postcss-animation`. <br> 

### Example

input:
```css
.foo {
  animation-name: fadeIn;
}
```
output:
```css
.foo {
  animation-name: fadeIn;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```
Currently there is support for `animate.css`, but more will be added soon (`magic`, `animista`, etc.) The plugin will be constantly updated, and if you want to take part, you are welcome!:wave:

### Install

```bash
npm install postcss-move-it
```

### Usage

If you're using a Webpack. Add this code to the `postcss.config.js`:
```js
require("postcss-move-it")
```

For Gulp:
```js
const postcss = require('gulp-postcss');
const gulp = require('gulp');
const postcssMoveIt = require('postcss-move-it');

gulp.task('default', function () {
    var processors = [
        postcssMoveIt()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

## Happy coding!

![giphy.gif](https://media.giphy.com/media/XbgzkpzueQjzepnhLy/giphy.gif)
