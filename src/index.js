const Hapi = require('hapi');
const config = require('./config');

const server = Hapi.server({
    port: config.port,
    host: config.host || '0.0.0.0'
});

async function init() {
    await server.start();
    require('./parse')(server);
}

init().then(() => {
    console.log(`Listening on ${server.info.uri}`);
});

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});