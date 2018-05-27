const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

try {
    module.exports = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, '../config.yaml')));
}
catch(e) {
    console.warn(e.toString());
    module.exports = {};
}