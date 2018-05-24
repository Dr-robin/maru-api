const Hapi = require('hapi');
const config = require('./config');

const server = Hapi.server({
    port: config.port,
    host: config.host || '0.0.0.0'
});

async function init() {
    await server.start();
    console.log(`Listening on ${server.info.uri}`);
}

init();