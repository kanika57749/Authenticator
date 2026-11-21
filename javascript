function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "student" && password === "12345") {
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("otpSection").style.display = "block";
        document.getElementById("message").innerHTML = "Login Successful! Enter OTP.";
    } else {
        document.getElementById("message").innerHTML = "Invalid Username or Password!";
    }
}

function verifyOTP() {
    let otp = document.getElementById("otp").value;

    if (otp === "123456") {
        document.getElementById("otpSection").style.display = "none";
        document.getElementById("message").innerHTML = "Authentication Successful! Welcome.";
    } else {
        document.getElementById("message").innerHTML = "Incorrect OTP! Try Again.";
    }
}