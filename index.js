var uglify = require('uglify-js');
var chalk = require('chalk');
var timestamp = require('./lib/timestamp');
var global = require('global');

var options = {
    preserveComments: false,
    compress: true,
    mangle: true
};

function FireantUglify(files) {
    if (typeof global.options !== 'undefined' &&
        typeof global.options.uglify !== 'undefined'
    ) {
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

        try {
            return uglify.minify(source, options).code;
        } catch(err) {
            FireantUglifyErrorMessage(err);
            return '';
        }
    } else {
        try {
            return uglify.minify(files, options).code;
        } catch(err) {
            FireantUglifyErrorMessage(err);
            return '';
        }
    }
}

function FireantUglifyErrorMessage(err) {
    console.log(
        timestamp(),
        chalk.yellow.bold('-------------- ERROR --------------')
    );
    
    console.log(
        timestamp(),
        chalk.red(err.message),
        chalk.red.bold('Line:'),
        chalk.red(err.line),
        chalk.red.bold('Col:'),
        chalk.red(err.col),
        chalk.red.bold('Pos:'),
        chalk.red(err.pos)
    );
}

String.prototype.uglify = FireantUglify;
module.exports = FireantUglify;
