const spec = require('./spec');
const ruby = require('./ruby');
const boom = require('boom');
const joi = require('joi');
const validator = require('validator');

module.exports = (sv) => {
    Object.keys(spec).forEach((key) => {
        sv.route({
            method: 'GET',
            path: spec[key].endpoint + '/{id}',
            async handler(req) {
                let result;
                if(joi.validate(req.params, {id: joi.string().hex().length(24)})) {
                    result = await ruby(key).get(req.params.id);
                }
                else if(req.params.id && validator.isJSON(req.params.id)) {
                    /*try {
                        req.params.id = JSON.parse(req.params.id);
                    }
                    catch(e) {
                        req.params.id = {};
                    }
                    result = await ruby(key).find(JSON.parse())*/
                    throw boom.notFound();
                }
                if(result) {
                    return result;
                }
                else {
                    throw boom.notFound();
                }
            }
        });
    });
};