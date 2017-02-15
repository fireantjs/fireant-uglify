#fireant-uglify

UglifyJS plugin for [Fireant](https://github.com/fireantjs/fireant)

## Installation

```shell
npm install -D fireant-uglify
```
## Sample fireantfile.js using one file

```javascript
var fireant = require("fireant");
var uglify = require("fireant-uglify");

fireant.task("watch", function() {
	fireant.watch("js/*.js", function(file) {
    	uglify("js/common.js").save("html/js/common.min.js");
	});
});
```
## Sample fireantfile.js using one file, with options

```javascript
var fireant = require("fireant");
var uglify = require("fireant-uglify");
var global = require('global');

global.options = { 
    uglify: {
        preserveComments: false,
        compress: true,
        mangle: true
    }
};

fireant.task("watch", function() {
	fireant.watch("js/*.js", function(file) {
    	uglify("js/common.js").save("html/js/common.min.js");
	});
});
```

## Sample fireantfile.js using multiple files

```javascript
var fireant = require("fireant");
var uglify = require("fireant-uglify");

fireant.task("watch", function() {
	fireant.watch("js/*.js", function(file) {
    	uglify(["js/common.js", "js/app.js"]).save("html/js/common.min.js");
	});
});
```

## Sample fireantfile.js using string

```javascript
var fireant = require("fireant");
var uglify = require("fireant-uglify");

fireant.task("watch", function() {
	fireant.watch("js/*.js", function(file) {
        var js = "var foo = 'bar';";
    	(js).uglify().save("html/js/common.min.js");
	});
});
```

