const babel = require('@babel/core');
const fs = require('fs');

fs.writeFileSync(
  'build/script.js',
  babel.transform(
    fs.readFileSync('src/script.js').toString('utf8'),
    {
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }
  )
);
