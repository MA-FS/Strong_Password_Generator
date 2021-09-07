// Use funtion to create arrays for lowercase, uppercase, numeric, special characters

// Align character sets with ASCII table character numbers
const lowerCaseCharCodes = arrayFromLowToHigh(97, 122)
const upperCaseCharCodes = arrayFromLowToHigh(65, 90)
const numericCharCodes = arrayFromLowToHigh(48, 57)
const specialCharCodes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Function to create arrays from character sets
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}

// Function for user prompt options
function getPasswordOptions() {
  // Password length
  var length = parseInt(prompt('Select a password length between 8 and 128 characters'), 10);
  
  // Check to see if input was a number
  if (Number.isNaN(length)) {
    alert('Password must be a number');
    return null;
  }

  // Check to see if number is at least 8 characters long
  if (length < 8) {
    alert('Password must be at least 8 characters long');
    return null;
  }
  
  // Check to see if number is less than 128 characters long
  if (length > 128) {
    alert('Password must be 128 characters or less');
    return null;
  }

  // Use confirm function to check each of the required criteria
  // Confirm lowercase characters
  var hasLowerCaseCharacters = confirm('Click OK to confirm if you would like to include lowercase characters');

  // Confirm uppercase characters
  var hasUpperCaseCharacters = confirm('Click OK to confirm if you would like to include uppercase characters');

  // Confirm numeric characters
  var hasNumericCharacters = confirm('Click OK to confirm if you would like to include numeric characters');
  
  // Confirm special characters
  var hasSpecialCharacters = confirm('Click OK to confirm if you would like to include special characters');  

  // Check to see if at least one of the options was selected
  if (
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasNumericCharacters === false &&
    hasSpecialCharacters === false
  ) {
    alert('At least one option must be selected');
    return null;
  }

  // Store and return the password options
  var passwordOptions = {
    length: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
  };

  return passwordOptions;
}

// Function to generate password depending on user options
function generatePassword() {
  var options = getPasswordOptions();

  // Check if options exists and exit if not to prevent console log errors
  if (!options) 
  return null;
  
  // Create an array that contains possible character codes depending on user selection
  let possibleCharacters = [];
  if (options.hasLowerCaseCharacters) possibleCharacters = possibleCharacters.concat(lowerCaseCharCodes)
  if (options.hasUpperCaseCharacters) possibleCharacters = possibleCharacters.concat(upperCaseCharCodes)
  if (options.hasNumericCharacters) possibleCharacters = possibleCharacters.concat(numericCharCodes)
  if (options.hasSpecialCharacters) possibleCharacters = possibleCharacters.concat(specialCharCodes)
    
  // Choose random character codes from the list of possible characters and convert them to their relevent ASCII characters for the user length required
  const passwordCharacters = []
  for (let i = 0; i < options.length; i++) {
    const characterCode = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  
  return passwordCharacters.join('')
    
}

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
