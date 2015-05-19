Package.describe({
  name: 'netanelgilad:moment-business',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Add business days methods to momentjs.',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/netanelgilad/meteor-moment-business',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('momentjs:moment@2.10.3');

  api.addFiles('moment-business.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:moment-business');
  api.addFiles('moment-business-tests.js');
});
