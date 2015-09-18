Package.describe({
  summary: "NPM packages dependancies for the project."
});

Npm.depends({
  'bignum': '0.9.2'
});

Package.onUse(function(api) {
  api.addFiles(['npm-requires-server.js'], 'server');
  api.export('NpmRequires', ['server']);
});
