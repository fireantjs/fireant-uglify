var uglify = require('uglify-js');
var chalk = require('chalk');
var global = require('global');
var fs = require('fs');

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
            source = fs.readFileSync(files).toString();
        } else {
            for (var i = 0; i < files.length; i++) {
                source = source + "\n" + fs.readFileSync(files[i]).toString();
            }
        }
    } else {
        source = this.toString();
    }

    // Run UglifyJS
    options.fromString = true;
    return uglify.minify(source, options).code;
}

String.prototype.uglify = FireantUglify;
module.exports = FireantUglify;
