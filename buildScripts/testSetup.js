
// Register babel to transpile before tests run
require('babel-register')();

// Disable webpack features that mocha does not understand
require.extensions['.css'] = function () {};
