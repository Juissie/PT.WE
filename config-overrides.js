// config-overrides.js

module.exports = function override(config, env) {
    // Find the rule that handles source-map-loader
    const sourceMapLoader = config.module.rules.find(
      (rule) =>
        rule.enforce === 'pre' &&
        rule.use &&
        rule.use.some((use) => use.loader && use.loader.includes('source-map-loader'))
    );
  
    if (sourceMapLoader) {
      // Exclude node_modules from source-map-loader
      sourceMapLoader.exclude = /node_modules/;
    }
  
    return config;
  };
  