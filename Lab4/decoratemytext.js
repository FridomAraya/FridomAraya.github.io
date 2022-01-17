
window.onload = function () {
  var btn1= document.getElementById("btn1");
  btn1.onclick= interval;

  var check1= document.getElementById("check1");

  check1.onchange=chengeFont;

}




function increaseFontSize(){
  let txt = document.getElementById("textArea");
  style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  txt.style.fontSize = (currentSize + 2) + 'px';
}

function interval() {
  var id = setInterval(increaseFontSize, 1000);
  setTimeout(clearInterval, 5000, id);
}

function chengeFont() {
  if(document.getElementById("check1").checked){
    document.getElementById("textArea").style.fontWeight="bold";
    document.getElementById("textArea").style.color="green";
    document.getElementById("textArea").style.textDecoration="underline";
    document.body.style.backgroundColor= "lightyellow";
  }
  else{
    document.getElementById("textArea").style.fontWeight="normal";
    document.getElementById("textArea").style.color="black";
    document.getElementById("textArea").style.textDecoration="none";
    document.body.style.backgroundColor= "white";

  }

}



function pig() {
  var words = document.getElementById("textArea").value;
  var splittedword = words.split(/\s+/);
  var result = "";
  for (var i = 0; i < splittedword.length; i++) {
    var word = splittedword[i];
    result +=  toPig(word) + " ";

  }
  document.getElementById("textArea").value = result;
}


function toPig(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = "";

  if (vowels.indexOf(str[0]) > -1) {
      newStr = str + "ay";
  } else {
      let firstMatch = str.match(/[aeiou]/g) || 0;
      let vowel = str.indexOf(firstMatch[0]);
      newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";

  }
  return newStr;


}

function markov() {
  var words = document.getElementById("textArea").value;
  var arr = words.split(/\s+/);
  var result = "";
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
          arr[i] = "Malkovich";
      }
      result += arr[i] + " ";
  }
  document.getElementById("textArea").value = result;
}


