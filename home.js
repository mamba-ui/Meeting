```javascript
// =====================================
// MEETING HOME PAGE
// =====================================


// SEARCH
const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const value =
        searchInput.value.toLowerCase();

    const people =
        document.querySelectorAll(".person");

    const rooms =
        document.querySelectorAll(".room");


    people.forEach(function (person) {

        const text =
            person.innerText.toLowerCase();

        if (text.includes(value)) {

            person.style.display = "";

        } else {

            person.style.display = "none";

        }

    });


    rooms.forEach(function (room) {

        const text =
            room.innerText.toLowerCase();

        if (text.includes(value)) {

            room.style.display = "";

        } else {

            room.style.display = "none";

        }

    });

});



// =====================================
// CONNECT BUTTONS
// =====================================

const connectButtons =
    document.querySelectorAll(".person button");


connectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        if (button.innerText === "Connect") {

            button.innerText = "Connected";

            button.style.background = "#23c878";

            button.style.color = "white";

            button.style.borderColor = "#23c878";

        } else {

            button.innerText = "Connect";

            button.style.background = "";

            button.style.color = "";

            button.style.borderColor = "";

        }

    });

});



// =====================================
// JOIN ROOM
// =====================================

const joinButtons =
    document.querySelectorAll(".join");


joinButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const room =
            button.parentElement
            .querySelector("h3")
            .innerText;

        alert(
            "You are joining: " + room
        );

    });

});



// =====================================
// CREATE MEETING
// =====================================

const createButtons =
    document.querySelectorAll(".create button");


createButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Create Meeting page coming next!"
        );

    });

});



// =====================================
// NAVIGATION
// =====================================

const navItems =
    document.querySelectorAll(".nav-item");


navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navItems.forEach(function (nav) {

            nav.classList.remove("active");

        });

        item.classList.add("active");

    });

});



// =====================================
// NOTIFICATION
// =====================================

const notification =
    document.querySelector(".icon-button");


notification.addEventListener("click", function () {

    alert(
        "You have 3 new notifications."
    );

});
```
