const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

const message = document.getElementById("message");


// ================================
// SHOW MESSAGE
// ================================
function showMessage(text, type) {
    message.textContent = text;
    message.className = `message show ${type}`;
}


// ================================
// CLEAR MESSAGE
// ================================
function clearMessage() {
    message.textContent = "";
    message.className = "message";
}


// ================================
// SWITCH TO LOGIN
// ================================
function showLogin() {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    clearMessage();
}


// ================================
// SWITCH TO SIGN UP
// ================================
function showSignup() {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    clearMessage();
}


loginTab.addEventListener("click", showLogin);
signupTab.addEventListener("click", showSignup);
goSignup.addEventListener("click", showSignup);
goLogin.addEventListener("click", showLogin);


// ================================
// PHONE VALIDATION
// ================================
function validPhone(phone) {

    // Accepts:
    // 0781234567
    // 0721234567
    // +250781234567
    // +250 781234567

    const phoneRegex = /^(?:\+250|0)(7[0-9])\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{1}$/;

    return phoneRegex.test(phone.replace(/-/g, ""));
}


// ================================
// CREATE ACCOUNT
// ================================
signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const phone = document.getElementById("signupPhone").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (name.length < 2) {
        showMessage("Please enter your full name.", "error");
        return;
    }

    if (!validPhone(phone)) {
        showMessage("Please enter a valid telephone number.", "error");
        return;
    }

    if (password.length < 6) {
        showMessage("Password must contain at least 6 characters.", "error");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Passwords do not match.", "error");
        return;
    }

    // Check whether an account already exists
    const existingUser = JSON.parse(localStorage.getItem("meetingUser"));

    if (existingUser && existingUser.phone === phone) {
        showMessage("An account with this telephone number already exists.", "error");
        return;
    }

    // Save account
    const user = {
        name: name,
        phone: phone,
        password: password
    };

    localStorage.setItem("meetingUser", JSON.stringify(user));

    showMessage("Account created successfully! You can now login.", "success");

    // Clear form
    signupForm.reset();

    // Switch to login after a short delay
    setTimeout(() => {
        showLogin();
        document.getElementById("loginPhone").value = phone;
    }, 1200);
});


// ================================
// LOGIN
// ================================
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const phone = document.getElementById("loginPhone").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("meetingUser"));

    if (!savedUser) {
        showMessage("No account found. Please create an account first.", "error");
        return;
    }

    if (phone !== savedUser.phone || password !== savedUser.password) {
        showMessage("Incorrect telephone number or password.", "error");
        return;
    }

    // Save current login
    localStorage.setItem("meetingLoggedIn", "true");
    localStorage.setItem("meetingCurrentUser", JSON.stringify(savedUser));

    showMessage(`Welcome back, ${savedUser.name}!`, "success");

    // Redirect to your main website page
    setTimeout(() => {
        window.location.href = "live.html";
    }, 1000);
});


// ================================
// PASSWORD SHOW / HIDE
// ================================
document.querySelectorAll(".toggle-password").forEach(button => {

    button.addEventListener("click", function () {

        const inputId = this.getAttribute("data-target");
        const input = document.getElementById(inputId);

        if (input.type === "password") {
            input.type = "text";
            this.textContent = "🙈";
        } else {
            input.type = "password";
            this.textContent = "👁";
        }
    });

});


// ================================
// FORGOT PASSWORD
// ================================
document.getElementById("forgotPassword").addEventListener("click", function (event) {

    event.preventDefault();

    showMessage(
        "For this demo, password recovery requires a real backend/SMS system.",
        "error"
    );
});
