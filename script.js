// ==========================================
// MEETING WEBSITE - LOGIN & SIGN UP SYSTEM
// ==========================================


// ------------------------------------------
// GET ELEMENTS
// ------------------------------------------

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

const message = document.getElementById("message");


// ------------------------------------------
// SHOW MESSAGE
// ------------------------------------------

function showMessage(text, type = "error") {
    if (!message) return;

    message.textContent = text;
    message.className = "message " + type;

    setTimeout(() => {
        message.textContent = "";
        message.className = "message";
    }, 3500);
}


// ------------------------------------------
// SWITCH TO LOGIN
// ------------------------------------------

function showLogin() {
    if (!loginForm || !signupForm) return;

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    showMessage("");
}


// ------------------------------------------
// SWITCH TO SIGN UP
// ------------------------------------------

function showSignup() {
    if (!loginForm || !signupForm) return;

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    showMessage("");
}


// ------------------------------------------
// TAB BUTTONS
// ------------------------------------------

if (loginTab) {
    loginTab.addEventListener("click", showLogin);
}

if (signupTab) {
    signupTab.addEventListener("click", showSignup);
}

if (goSignup) {
    goSignup.addEventListener("click", showSignup);
}

if (goLogin) {
    goLogin.addEventListener("click", showLogin);
}


// ------------------------------------------
// SHOW / HIDE PASSWORD
// ------------------------------------------

const passwordButtons = document.querySelectorAll(".toggle-password");

passwordButtons.forEach(button => {

    button.addEventListener("click", function () {

        const targetId = this.getAttribute("data-target");
        const passwordInput = document.getElementById(targetId);

        if (!passwordInput) return;

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            this.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            this.textContent = "👁";
        }

    });

});


// ------------------------------------------
// CREATE ACCOUNT
// ------------------------------------------

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const phone = document.getElementById("signupPhone").value.trim();
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const terms = document.getElementById("terms").checked;


        // Check name
        if (name.length < 2) {
            showMessage("Please enter your full name.");
            return;
        }


        // Check phone
        if (phone.length < 9) {
            showMessage("Please enter a valid telephone number.");
            return;
        }


        // Check password
        if (password.length < 6) {
            showMessage("Password must contain at least 6 characters.");
            return;
        }


        // Confirm password
        if (password !== confirmPassword) {
            showMessage("Passwords do not match.");
            return;
        }


        // Terms
        if (!terms) {
            showMessage("Please agree to the Terms & Conditions.");
            return;
        }


        // Check whether account already exists
        const existingUser = localStorage.getItem("meetingUser");

        if (existingUser) {

            const user = JSON.parse(existingUser);

            if (user.phone === phone) {
                showMessage("An account with this telephone number already exists.");
                return;
            }
        }


        // Create user object
        const newUser = {
            name: name,
            phone: phone,
            password: password
        };


        // Save user
        localStorage.setItem("meetingUser", JSON.stringify(newUser));


        showMessage("Account created successfully! You can now login.", "success");


        // Clear sign-up form
        signupForm.reset();


        // Switch to login after short delay
        setTimeout(() => {
            showLogin();

            document.getElementById("loginPhone").value = phone;

        }, 1200);

    });

}


// ------------------------------------------
// LOGIN
// ------------------------------------------

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const phone = document.getElementById("loginPhone").value.trim();
        const password = document.getElementById("loginPassword").value;
        const rememberMe = document.getElementById("rememberMe").checked;


        // Get saved user
        const savedUser = localStorage.getItem("meetingUser");


        if (!savedUser) {

            showMessage("No account found. Please create an account first.");

            return;
        }


        const user = JSON.parse(savedUser);


        // Check phone
        if (phone !== user.phone) {

            showMessage("Telephone number is incorrect.");

            return;
        }


        // Check password
        if (password !== user.password) {

            showMessage("Password is incorrect.");

            return;
        }


        // Save logged-in user
        localStorage.setItem("currentUser", JSON.stringify({
            name: user.name,
            phone: user.phone,
            rememberMe: rememberMe
        }));


        showMessage("Login successful! Welcome " + user.name + ".", "success");


        // Go to home page
        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);

    });

}


// ------------------------------------------
// FORGOT PASSWORD
// ------------------------------------------

const forgotPassword = document.getElementById("forgotPassword");

if (forgotPassword) {

    forgotPassword.addEventListener("click", function (event) {

        event.preventDefault();

        const savedUser = localStorage.getItem("meetingUser");

        if (!savedUser) {
            showMessage("No account has been created yet.");
            return;
        }

        showMessage(
            "For this demo, password recovery must be handled by the website administrator.",
            "success"
        );

    });

}


// ==========================================
// HOME PAGE USER SYSTEM
// ==========================================

// Get currently logged-in user
const currentUser = localStorage.getItem("currentUser");


// ------------------------------------------
// DISPLAY USER NAME ON HOME PAGE
// ------------------------------------------

if (currentUser) {

    const user = JSON.parse(currentUser);

    // Find username element on home page
    const usernameElements = document.querySelectorAll(".logged-user-name");

    usernameElements.forEach(element => {
        element.textContent = user.name;
    });

}


// ------------------------------------------
// LOGOUT
// ------------------------------------------

const logoutButtons = document.querySelectorAll(".logout-btn");

logoutButtons.forEach(button => {

    button.addEventListener("click", function () {

        localStorage.removeItem("currentUser");

        window.location.href = "login.html";

    });

});


// ------------------------------------------
// PROTECT HOME PAGE
// ------------------------------------------

// Only run this part on index.html
if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("/")
) {

    if (!currentUser) {

        // User is not logged in
        window.location.href = "login.html";

    }

}
