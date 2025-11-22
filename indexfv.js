document.getElementById("form-validate").addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let userNameerror = document.getElementById("username-error");
    let emailError = document.getElementById("mail-error");
    let passError  = document.getElementById("password-error");
    let cpassError  = document.getElementById("cpassword-error");

    let isvalid = true;

    let uNamePattern = /^[a-zA-Z ]+[a-zA-Z0-9]$/;
    let emailPattern = /^[a-zA-Z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;
    let passpattern =/^[a-zA-Z0-9!@#$%^&*]{3,10}$/;

    // Username validation
    if (userName === "") {
        userNameerror.innerText = "Name is required";
        isvalid = false;
    }
    else if (!uNamePattern.test(userName)) {
        userNameerror.innerText = "Enter your full name";
        isvalid = false;
    }
    else {
        userNameerror.innerText = "";
    }

    // Email validation
    if (email === "") {
        emailError.innerText = "Email is required";
        isvalid = false;
    }
    else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email";
        isvalid = false;
    }
    else {
        emailError.innerText = "";
    }

    // Password validation
    if (password === "") {
        passError.innerText = "Password is required";
        isvalid = false;
    }
    else if (password.length < 3 || password.length > 10) {
        passError.innerText = "Enter a password between 3 to 10 characters";
        isvalid = false;
    }
    else {
        passError.innerText = "";
    }

    // Confirm password
    if (confirmPassword === "") {
        cpassError.innerText = "Confirm Password is required";
        isvalid = false;
    }
    else if (password !== confirmPassword) {
        cpassError.innerText = "Password does not match";
        isvalid = false;
    }
    else {
        cpassError.innerText = "";
    }

    if (isvalid) {
        alert(`Hi ${userName}, welcome to our site!`);
        console.log("username, email, password, confirmPassword:", userName, email, password, confirmPassword);
    }
});
