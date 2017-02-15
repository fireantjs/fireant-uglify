var uglify = require('uglify-js');
var chalk = require('chalk');
var global = require('global');

var options = {
    preserveComments: false,
    compress: true,
    mangle: true
};

function FireantUglify(files) {
    if (global.options.uglify) {
        options = global.options.uglify;
    }

    // Assign source
    var source;

    if (files) {
        if (typeof files === 'string') {
            files = [ files ]; // convert to array
        }
    } else {
        source = this.toString();
    }

    // Run UglifyJS
    if (source) {
        options.fromString = true;
        return uglify.minify(source, options).code;
    } else {
        return uglify.minify(files, options).code;
    }
}

String.prototype.uglify = FireantUglify;
module.exports = FireantUglify;
