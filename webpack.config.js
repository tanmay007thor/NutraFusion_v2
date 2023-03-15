const path = require('path');

module.exports = {
  // ... other config options ...
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    }
  }
};
