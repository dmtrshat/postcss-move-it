const postcss = require("postcss");
const keyframes = require("./lib/keyframes");

module.exports = postcss.plugin("postcss-animation", () => {
  let hasKeyframes = [];

  function appendKeyframes(css, value) {
    if (!keyframes[value] || hasKeyframes[value]) {
      return;
    }
    if (!hasKeyframes[value]) {
      hasKeyframes[value] = true;
      css.append(keyframes[value]);
    }
  }

  return css => {
    hasKeyframes = [];

    css.walkDecls("animation-name", decl => {
      const { value } = decl;
      appendKeyframes(css, value);
    });

    css.walkDecls("animation", decl => {
      const values = postcss.list.space(decl.value);
      values.forEach(value => {
        appendKeyframes(css, value);
      });
    });
  };
});
