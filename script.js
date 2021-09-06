// Create arrays for lowercase, uppercase, numeric, special characters

// Lowercase character array

const lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Uppercase character array

const upperCaseCharacters = lowerCaseCharacters.map(lowerCaseCharacters => lowerCaseCharacters.toUpperCase());

// Numeric character array

const  numericCharacters = ["1","2","3","4","5","6","7","8","9","0"];

// Special character array

const specialCharacters = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

// Request password requirements from user




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
