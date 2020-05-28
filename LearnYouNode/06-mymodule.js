'use strict'

const fs = require('fs');

function filterFiles(directory, extension, callback) {

    fs.readdir(directory, (error, data) => {
        if (error) {
            return callback(error);
        }
        else {
            const result = data.filter(file => file.endsWith(`.${extension}`))
            callback(null, result);
        }
    })
}

module.exports = filterFiles