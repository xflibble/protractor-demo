// conf.js

var reporters = require('jasmine-reporters');
var junitReporter = new reporters.JUnitXmlReporter({
    savePath: 'c:/js_test/protractor/',
    consolidateAll: false
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function() {
      jasmine.getEnv().addReporter(junitReporter)}
}

