```javascript
// ==============================
// MEETING LOGIN JAVASCRIPT
// ==============================


// GET ELEMENTS
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const message = document.getElementById("message");


// ==============================
// SHOW SIGN UP
// ==============================

function showSignup() {

    loginForm.classList.add("hidden");

    signupForm.classList.remove("hidden");

    title.textContent = "Create Account";

    subtitle.textContent =
        "Join the Meeting community";

    message.style.display = "none";
}


// ==============================
// SHOW LOGIN
// ==============================

function showLogin() {

    signupForm.classList.add("hidden");

    loginForm.classList.remove("hidden");

    title.textContent = "Welcome Back";

    subtitle.textContent =
        "Login to continue to Meeting";

    message.style.display = "none";
}


// ==============================
// SHOW / HIDE PASSWORD
// ==============================

function showPassword(id) {

    const input = document.getElementById(id);

    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }
}


// ==============================
// MESSAGE
// ==============================

function showMessage(text) {

    message.style.display = "block";

    message.textContent = text;
}


// ==============================
// LOGIN
// ==============================

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const phone =
        document.getElementById("loginPhone").value;

    const password =
        document.getElementById("loginPassword").value;


    if (phone === "" || password === "") {

        showMessage("Please fill in all fields.");

        return;
    }


    showMessage("Login successful! Welcome to Meeting.");

});


// ==============================
// CREATE ACCOUNT
// ==============================

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const password =
        document.getElementById("password").value;

    const confirm =
        document.getElementById("confirm").value;


    if (password !== confirm) {

        showMessage("Passwords do not match.");

        return;
    }


    if (password.length < 6) {

        showMessage(
            "Password must contain at least 6 characters."
        );

        return;
    }


    showMessage(
        "Account created successfully! Welcome, " + name + "."
    );

});


// ==============================
// FORGOT PASSWORD
// ==============================

function forgotPassword() {

    const phone = prompt(
        "Enter your telephone number:"
    );

    if (phone) {

        alert(
            "Password recovery instructions will be sent to " +
            phone
        );

    }
}


// ==============================
// GUEST LOGIN
// ==============================

function guestLogin() {

    alert(
        "Welcome to Meeting! You are continuing as a guest."
    );

}
```
