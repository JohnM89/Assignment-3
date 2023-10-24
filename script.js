function getPasswordCriteria() {
    var length = prompt("Please enter the desired length of your password (between 8 and 128 characters)");

    for (; ;) {
        if (length === null) {
            return;
        }
        if (length.trim() === "" || isNaN(length) || length < 8 || length > 128) {
            length = prompt("Invalid input. Please enter a NUMBER between 8 and 128 for the password length:");
        } else {
            break;
        }
    }

    var lowercase = confirm("Include lowercase characters in your password?");
    var uppercase = confirm("Include uppercase characters in your password?");
    var numeric = confirm("Include numeric characters in your password?");
    var special = confirm("Include special characters in your password?");

    for (; !(lowercase || uppercase || numeric || special);) {
        alert("You must select at least one character type.");
        lowercase = confirm("Include lowercase characters in your password?");
        uppercase = confirm("Include uppercase characters in your password?");
        numeric = confirm("Include numeric characters in your password?");
        special = confirm("Include special characters in your password?");
    }

    generatePassword(length, lowercase, uppercase, numeric, special);
}

function generatePassword(length, lowercase, uppercase, numeric, special) {
    var passwordField = document.getElementById("password");
    var chars = "";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) chars += "0123456789";
    if (special) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var generatedPassword = "";

    for (var i = 0; i < length; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        generatedPassword += chars.substring(randomNumber, randomNumber + 1);
    }

    passwordField.value = generatedPassword;
}

document.getElementById("generate").addEventListener("click", getPasswordCriteria);

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}
