"use strict";

var babel = require('@babel/core');

var fs = require('fs');

fs.writeFileSync('build/script.js', babel.transform(fs.readFileSync('src/script.js').toString('utf8'), {
  plugins: ["@babel/plugin-transform-modules-commonjs"]
}));