// Assignment Code
var generateBtn = document.querySelector("#generate");

//making a function for generate password
function generatePassword(){

  var inputNumber = prompt("-	how many characters would you like your password to contain..?");

 // changed  the string to a number
  var changeToNumber = parseInt(inputNumber);
  alert(changeToNumber);

 // creating an if statement if user enter other than a number..

  if ( isNaN(changeToNumber) ) {
    alert("Fool, enter a number!");
  }












}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
