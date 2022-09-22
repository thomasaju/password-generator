// Assignment Code
var generateBtn = document.querySelector("#generate");



function randomInteger(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min * (1- rand)+ rand * max);
}



function getRandomItem(list){
  return list [randomInteger(0, list.length)]
}



//making a function for generate password
function generatePassword(){

  var inputNumber = prompt("-	how many characters would you like your password to contain..?");
  

 // changed  the string to a number
  var changeToNumber = parseInt(inputNumber);



 // creating an if statement if user enter other than a number..

  if ( isNaN(changeToNumber) ) {
    alert(" Enter a valid number! 😡");
    return generatePassword();
  }

  
  //password length > 8 & password < 128.

  if (inputNumber < 8 || inputNumber > 128 ){
    alert("Paswword must have minimum of 8 and maximum of 128 letters");
    return generatePassword();
  }


  var lowerCase = confirm("click ok to confirm including lowercase letters");
  var upperCase = confirm("click ok to confirm including uppercase letters");
  var numeric = confirm("click ok to confirm including numeric characters");
  var symbols = confirm("click ok to confirm including symbols")


  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var symbolicValue = ["!" ,"@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var options = [];


  
  if(lowerCase === true){
    options.push(lowerCaseLetters);
  }

  if(upperCase === true){
    options.push(upperCaseLetters);
  }

  if(numeric === true){
    options.push(numbers);
  }
  if(symbols === true){
    options.push(symbolicValue);
  }

  if (options.length === 0){
    options.push(lowerCaseLetters && upperCaseLetters);
  }

 
var generatedValues = "";

for(var i =0; i < changeToNumber; i++){
  var randomNumber = getRandomItem(options);
  var randomPassword = getRandomItem(randomNumber);
  
 generatedValues += randomPassword;
 

 console.log(generatedValues);

 


  // var string = randomPassword;
  // var usingSplit = string.split('') ;
  // var usingArrayFrom = Array.from(string);
  // var usingObjectAssign = Object.assign([], string);
  // console.log( usingObjectAssign );
}


return generatedValues;






}











// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
