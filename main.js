// $(document).ready(function (){
//   console.log("Fuck");
// });

var xArray = [];
var oArray = [];

var userInput = prompt('Enter a String of X\'s and O\'s' );
var sep = "";

function splitInput (str){
  sep = str.split("");
}

function findXOrO (arr){
  for(i=0;i<arr.length;i++){
    if( arr[i] === 'x' || arr[i] === 'X' ){
      xArray.push(arr[i]);
    } else if ( arr[i] === 'o' || arr[i] === 'O' ){
      oArray.push(arr[i]);
    }
  }
}

function evenCompare (arr1, arr2){
  if( arr1.length %2 === 0 && arr2.length %2 === 0){
    console.log(true);
  } else{
    console.log(false);
  }
}

function countStuff (str){
splitInput(str);
findXOrO(sep);
evenCompare(xArray, oArray);
}

countStuff(userInput);