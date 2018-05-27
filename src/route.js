const spec = require('./spec');
const ruby = require('./ruby');

module.exports = (sv) => {
    Object.keys(spec).forEach((key) => {
        sv.route({
            method: 'GET',
            path: spec[key].endpoint + '/{id}',
            async handler(req) {
                return await ruby(key).get(req.params.name);
            }
        });
    });
};