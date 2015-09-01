var UglifyJS = require("uglify-js");
var result = UglifyJS.minify(
  [ 
  "file1.js", 
  "file2.js", 
  "file3.js" 
  ], 
  {
    outSourceMap: "out.js.map"
  }
);