// Arrays to draw on
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialCharacters = ["!", "`", "~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "},", "[", "]"]

// Function Criteria
function passwordCriteria () {

var newPassword = alert("You need a secure password. Generate a password now.");
var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
  if (passwordLength >= 8 || passwordLength >= 128) {
    var confirmPassword = alert('Your password length will be at least 8 charatcers!');
  }
var lowerCase = window.confirm("Should your password include lowercase letters? Yes or No?");
var upperCase = confirm("Should your password contain uppercase letters? Yes or No?");
var numberAdd = confirm("Would you like to have numbers in your password? Yes or No");
var characters = confirm("Should your password require special characters? Yes or No?");

  if(upperCase === false && lowerCase === false && numberAdd === false && characters === false) {
    alert("You must select at least one character type!");
  }

  // create an object 

  var passwordOptions = {
    passlength: passwordLength,
    lowerCase: lowerCase,
    upperCase: upperCase, 
    numberAdd: numberAdd,
    characters: characters
  }
  return grabRandom(passwordOptions);
  
}

function grabRandom(array) {
  console.log(passwordOptions)
    var index = Math.floor(Math.random() * array.length);
    var element = array[index];
    return element;
  }
  
function generatePassword() {
  var passOptions = passwordCriteria()
  var guaranteedArray = [];
  var possibleArray = [];

  if (passOptions.characters) {
      possibleArray = possibleArray.concat(specialCharacters);
      guaranteedArray.push(grabRandom(specialCharacters));
    }

  if (passOptions.numberAdd) {
    possibleArray = possibleArray.concat(numbers);
    guaranteedArray.push(grabRandom(numbers));
  }

  if (passOptions.upperCase) {
    possibleArray = possibleArray.concat(uppercaseLetters);
    guaranteedArray.push(grabRandom(uppercaseLetters));
  }

  if (passOptions.lowerCase) {
    possibleArray = possibleArray.concat(lowercaseLetters);
    guaranteedArray.push(grabRandom(lowercaseLetters));
  }
  console.log(possibleArray, guaranteedArray);

// Create a password with the criteria needed
  for(var i = 0; i < length; i++) {
    console.log("hello");
    // var finalPassword = Math.floor(Math.random() * possibleArray.length);
    // console.log(finalPassword);
    // alert("Here is your password!");
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

