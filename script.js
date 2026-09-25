// =========================================
// ELEMENTS
// =========================================

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

const message = document.getElementById("message");


// =========================================
// MESSAGE
// =========================================

function showMessage(text, type = "") {

    message.textContent = text;
    message.className = "message";

    if (type) {
        message.classList.add(type);
    }
}


// =========================================
// SHOW LOGIN
// =========================================

function showLogin() {

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    showMessage("");
}


// =========================================
// SHOW SIGNUP
// =========================================

function showSignup() {

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    showMessage("");
}


// =========================================
// TAB EVENTS
// =========================================

loginTab.addEventListener("click", showLogin);

signupTab.addEventListener("click", showSignup);

goSignup.addEventListener("click", showSignup);

goLogin.addEventListener("click", showLogin);


// =========================================
// SHOW/HIDE PASSWORD
// =========================================

document.querySelectorAll(".password-toggle").forEach(button => {

    button.addEventListener("click", () => {

        const target = document.getElementById(
            button.dataset.target
        );

        if (target.type === "password") {

            target.type = "text";
            button.textContent = "🙈";

        } else {

            target.type = "password";
            button.textContent = "👁";

        }

    });

});


// =========================================
// CREATE ACCOUNT
// =========================================

signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("signupName").value.trim();

    const phone =
        document.getElementById("signupPhone").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const terms =
        document.getElementById("terms").checked;


    // CHECK NAME
    if (name.length < 2) {

        showMessage(
            "Please enter your full name.",
            "error"
        );

        return;
    }


    // CHECK PHONE
    if (!/^[0-9]{9,15}$/.test(phone)) {

        showMessage(
            "Please enter a valid telephone number.",
            "error"
        );

        return;
    }


    // CHECK PASSWORD
    if (password.length < 6) {

        showMessage(
            "Password must contain at least 6 characters.",
            "error"
        );

        return;
    }


    // CHECK PASSWORD MATCH
    if (password !== confirmPassword) {

        showMessage(
            "Passwords do not match.",
            "error"
        );

        return;
    }


    // CHECK TERMS
    if (!terms) {

        showMessage(
            "Please agree to the Terms & Conditions.",
            "error"
        );

        return;
    }


    // CHECK EXISTING ACCOUNT
    const existingAccount =
        localStorage.getItem("meetingAccount");

    if (existingAccount) {

        const account =
            JSON.parse(existingAccount);

        if (account.phone === phone) {

            showMessage(
                "This telephone number is already registered.",
                "error"
            );

            return;
        }
    }


    // CREATE ACCOUNT
    const account = {
        name: name,
        phone: phone,
        password: password
    };


    // SAVE ACCOUNT
    localStorage.setItem(
        "meetingAccount",
        JSON.stringify(account)
    );


    showMessage(
        "Account created successfully! Please login.",
        "success"
    );


    signupForm.reset();


    // PUT PHONE IN LOGIN FORM
    setTimeout(() => {

        showLogin();

        document.getElementById("loginPhone").value = phone;

    }, 1000);

});


// =========================================
// LOGIN
// =========================================

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const phone =
        document.getElementById("loginPhone").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    // GET ACCOUNT
    const savedAccount =
        localStorage.getItem("meetingAccount");


    // NO ACCOUNT
    if (!savedAccount) {

        showMessage(
            "No account found. Please create an account first.",
            "error"
        );

        return;
    }


    const account =
        JSON.parse(savedAccount);


    // CHECK PHONE
    if (phone !== account.phone) {

        showMessage(
            "Telephone number is incorrect.",
            "error"
        );

        return;
    }


    // CHECK PASSWORD
    if (password !== account.password) {

        showMessage(
            "Password is incorrect.",
            "error"
        );

        return;
    }


    // SAVE CURRENT USER
    localStorage.setItem(
        "currentUser",
        JSON.stringify({
            name: account.name,
            phone: account.phone
        })
    );


    showMessage(
        "Login successful! Welcome " + account.name + "!",
        "success"
    );


    // GO TO HOME PAGE
    setTimeout(() => {

        window.location.href = "index.html";

    }, 800);

});


// =========================================
// FORGOT PASSWORD
// =========================================

document.getElementById("forgotPassword")
    .addEventListener("click", () => {

        const account =
            localStorage.getItem("meetingAccount");

        if (!account) {

            showMessage(
                "No account has been created yet.",
                "error"
            );

            return;
        }

        showMessage(
            "Password recovery will be added later.",
            "success"
        );

    });
