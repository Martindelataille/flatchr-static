var config = {};

config.port = process.env.PORT || 8080;
config.host = "0.0.0.0";

config.connection = {
  host: config.host,
  port: config.port
};

module.exports = config;
