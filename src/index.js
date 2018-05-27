const Hapi = require('hapi');
const config = require('./config');

const server = Hapi.server({
    port: config.getValue('port'),
    host: config.getValue('host', 'localhost')
});

async function init() {
    await server.start();
    require('./route')(server);
}

init().then(() => {
    console.log(`Listening on ${server.info.uri}`);
});

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});