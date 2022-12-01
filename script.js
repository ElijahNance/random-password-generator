// Assignment Code
var generateBtn = document.querySelector("#generate");

//Declared Variables
function generatePassword() {
    var passwordLength;
    var password = "";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0987654321";
    var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    var random = 0
    var output ="";


    //Created a while loop so the function wouldn't proceed until the criteria was met
    //Used if statement to distinguish password length criteria
    while(1===1) {
        passwordLength = window.prompt("Choose a number between 8-128 for password length");
            if (isNaN(passwordLength)) {
                alert("Please enter a number");
            }else if (passwordLength < 8 || passwordLength > 128) {
                alert("Please select a number between 8-128");
            }
            else {
                console.log(passwordLength);
                break;
            }
        }
    //Used if statement to create a password based on the users preference
    if (confirm("Do you want to have uppercase letters in your password?")) {
        password+=uppercaseLetters;     
    };
    console.log(password);

    if (confirm("Do you want to have lowercase letters in your password?")) {
        password += lowercaseLetters;    
    };
    console.log(password);

    if (confirm("Do you want to have numbers in your password?")) {
        password += numbers
    };
    console.log(password);

    if (confirm("Do you want to have special characters in your password?")) {
        password += specialCharacters;
    };
    console.log(password);

    //Created a for loop so the built in math function would run until the length met the user criteria
    for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * password.length);
        output += password.substring(random, random +1);
    } 

    return output;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);