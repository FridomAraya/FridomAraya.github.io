"use strict";
(function(){
window.onload = function () {


  var btnStart = document.getElementById("btnStart");
  var btnStop = document.getElementById("btnStop");
  document.getElementById("btnStop").disabled = true;


  //set selected size
  document.getElementById("sizeOpt").onchange= setSize;
  document.getElementById("check").onchange= setSpeed;


  btnStart.onclick = animate;
  btnStop.onclick = stopAnim;


}
var x=null;
var speed=250;
var typedText="";
var selectedAnim="Blank";
function animate() {
  selectedAnim=  document.getElementById("animOpt").value;
  let arr = ANIMATIONS[selectedAnim].split("=====");
  var i=0;
  //enable stop
  document.getElementById("btnStop").disabled = false;
  //save typed text before viewing the animation
  typedText= document.getElementById("textarea").value;
  
  x= setInterval(changeText, speed);
  document.getElementById("btnStart").disabled = true;
  document.getElementById("animOpt").disabled = true;


  function changeText() {
  
    if (i < (arr.length - 1)) {
      i = i + 1;
    } else if (i === (arr.length - 1)) {
      i = 0;
    }
    document.getElementById("textarea").value = arr[i];
  }
}
function stopAnim(){
  clearInterval(x);
  document.getElementById("btnStart").disabled = false;
  document.getElementById("animOpt").disabled = false;
  document.getElementById("btnStop").disabled = true;

  document.getElementById("textarea").value = typedText;

  
}

function setSize(){
  document.getElementById("textarea").style.fontSize= document.getElementById("sizeOpt").value ;
}

function setSpeed(){
  if(document.getElementById("check").checked){
    speed=50;
  }else{
    speed=250;
  }
}

})();
