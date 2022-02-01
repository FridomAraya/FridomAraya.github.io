const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.use('/add-product',(req, res, next)=>{
   fs.createReadStream(path.join(__dirname,'views','add-product.html')).pipe(res)
   res.send();
});

app.use('/save-product',(req,res,next)=>{
console.log("Saved product...")
console.log(req.body);
res.send("Saved succsefully!!")
})

app.listen(3000);

