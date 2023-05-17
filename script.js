 // Assignment code here
 var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var special = ["#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];


// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 function generatePassword(){
  //Generate prompt for how many characters user would like
var passwordLength = prompt("How many characters would you like? Choose from 8 to 128 characters")

if (passwordLength <=8 || passwordLength >=128 || isNaN(passwordLength)) 
 {
  passwordLength = prompt("You must choose between 8 to 128");
 }

 //Generate prompt for what characters user would like in password
 var confirmupper = confirm("Do you want upper case characters?");
 var confirmlower = confirm("Do you want lower case characters?");
 var confirmnumber = confirm("Do you want numbers?");
 var confirmspecial = confirm("Do you want special characters?");

 
 // User options for characters
 var userChoice = []

 if (confirmupper) {
  userChoice = userChoice.concat(upper)
 }
 if (confirmlower){
  userChoice = userChoice.concat(lower)
 }
 if (confirmnumber) {
  userChoice = userChoice.concat(number)
 }
if (confirmspecial) {
  userChoice = userChoice.concat(special)
}


//get password from options
var userPassword =""
for (var i = 0; i <passwordLength; i++) {
  userPassword += userChoice[Math.floor(Math.random() * userChoice.length)];
  
}
return userPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get references to the #generate element


 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
