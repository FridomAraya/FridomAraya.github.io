const express= require('express');
const app= express();
app.set('view engine', 'ejs'); // this checks the view folder if render is called


// get request from localhost:9000/
app.get('/calculator.js', function(req, res){

  var q= req.query;
  var n1= parseInt(q.num1);
  var n2= parseInt(q.num2);
  var operation= q.operation;

  var result;

  if(operation=='add'){
    result= n1+n2;
  }else if(operation=='subtract'){
    result= n1-n2;
  }else if(operation=='multiply'){
    result= n1*n2;
  }else{
    result=n1/n2;
  }
  
  res.send("The Answer is: "+result
  +"<br><br> <a href= 'http://127.0.0.1:5500/Lab7/calculator.html'>Another calculation</a>");

  res.render('resultPage', {answer: result}); 


})


app.listen(9000, function(req, res){
  console.log("Server running!");
});

