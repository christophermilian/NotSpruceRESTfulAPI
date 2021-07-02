const Hapi = require("@hapi/hapi");

const routes = require("./src/config/routes/property");

require("env2")(".env");

exports.start = async () => {
  // Server configs
  const server = new Hapi.Server({
    host: process.env.API_HOST || "localhost",
    port: process.env.API_PORT || 8000,
    routes: {
      validate: {
        failAction: async (request, h, err) => {
          console.error(err);
          throw err;
        },
      },
    },
  });

  // Register plugins
  await server.register({
    plugin: require("hapi-postgres-connection"),
  });

  // Specify the routes
  server.route(routes);

  // Start the server
  try {
    await server.start();
    console.log(`Server listening on ${server.info.uri}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
