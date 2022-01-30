var fs = require("fs")
fs.readFile('calculator.js','utf8',function(err,data){
    console.log(data)
})