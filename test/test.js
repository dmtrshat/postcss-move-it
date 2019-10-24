const postcss = require("postcss");
const { expect } = require("chai");
const fs = require("fs");
const path = require("path");
const plugin = require("../");

function test(name) {
  const opts = { atRoot: true };

  const actual = postcss()
    .use(plugin(opts))
    .process(
      fs.readFileSync(path.join(__dirname, "fixtures", `${name}.css`), "utf8")
    ).css;

  const expected = fs.readFileSync(
    path.join(__dirname, "fixtures", `${name}.expected.css`),
    "utf8"
  );

  expect(actual.replace(/\r?\n/g, "").replace(/\s/g, "")).to.equal(
    expected.replace(/\r?\n/g, "").replace(/\s/g, "")
  );
}

// eslint-disable-next-line no-undef
describe("postcss-move-it", () => {
  // eslint-disable-next-line no-undef
  it("'fadeIn' animation-name must be set correctly", () => {
    test("fadeIn");
  });

  // eslint-disable-next-line no-undef
  it("'shake' animation-name must be set correctly", () => {
    test("shake");
  });
});
