const spec = require('./spec');
const db = require('./mongo');

function filterByRole(result, roles) {
    return result;
}

module.exports = (key) => {
    const col = db.get(key);
    return {
        async get(_id) {
            let result = await col.findOne({_id});
            return filterByRole(result);
        },
        async find(query, {limit, skip, sort}) {
            let result = await col.find(query);
        }
    };
};