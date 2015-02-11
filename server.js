/**
* Dependencies.
*/
var Hapi = require('hapi'),
    assert  = require('assert'),
    config = require('./config'),
    Routes = require('./routes');

// Demand configuration that we require.
assert(config && typeof config === 'object', 'we require a configuration object');
assert(config.host && config.port, 'config must include `host` and `port`');

// Create a new server
var server = new Hapi.Server(config.server);
// Setup the server with a host and port
server.connection(config.connection, { validation: { stripUnknown: true }});

server.ext('onPreResponse', function(request, next) {
  var response;
  response = request.response;
  if (response.isBoom) {
    return next.view('404');
  }
  return next(response);
});

// Views
server.views({
    path: __dirname + '/dist',
    engines: {
      html: require('handlebars')
    },
    isCached: false
});

// Load paths
server.route(Routes);

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'dist',
            listing: true
        }
    }
});

//Start the server
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
