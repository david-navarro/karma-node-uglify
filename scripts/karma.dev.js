const
  generate = require('videojs-generate-karma-config'),
  options = require('./karma.conf.js')
;

// declare object to merge with common config

module.exports = function(config) {
  // config.set({
  //   basePath: '../..',
  //   frameworks: ['jasmine'],
  //   //...
  // });



  config = generate(config, options);

  // any other custom stuff not supported by options here!
};
