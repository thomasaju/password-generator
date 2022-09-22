// Assignment Code
var generateBtn = document.querySelector("#generate");




//making a function for generate password
function generatePassword(){

  var inputNumber = prompt("-	how many characters would you like your password to contain..?");
  
 // changed  the string to a number
  var changeToNumber = parseInt(inputNumber);
  // console.log(changeToNumber);


 // creating an if statement if user enter other than a number..

  if ( isNaN(changeToNumber) ) {       //in console(after line 13) if input other than number shows Nan.
    alert(" Enter a valid number! 😡");
    return generatePassword();
  }

  
  //password length > 8 & password < 128.

  if (inputNumber < 8 || inputNumber > 128 ){
    alert("Password length should be a minimum of 8 and maximum of 128 characters");
    return generatePassword();
  }

     //confirmation from user to input these values
  var lowerCase = confirm("click ok to confirm including lowercase letters");
  var upperCase = confirm("click ok to confirm including uppercase letters");
  var numeric =   confirm("click ok to confirm including numeric characters");
  var symbols =   confirm("click ok to confirm including symbols")


      // values from keyboard
  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var symbolicValue = ["!" ,"@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  var options = []; // to collect the arrays selected by user.


    // if statements to push the selected values to options[];
  
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

 
var generatedValues = " "; // creating a variable to collect from randomPassword as strings.


// creating a function to get random number min and max
function randomInteger(x, y){
  var random = Math.random() 
  return Math.floor(x * (1- random)+ random * y); //making the random number without decimals
}



function RandomItem(a){
  return a [randomInteger(0, a.length)]
}



for(var i =0; i < changeToNumber; i++){
  var randomNumber = RandomItem(options);
  var randomPassword = RandomItem(randomNumber);
  generatedValues += randomPassword;
 
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
