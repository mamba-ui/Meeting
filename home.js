// =============================
// MOBILE MENU
// =============================

function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}


// =============================
// START MEETING
// =============================

function startMeeting() {
    showMessage("Welcome to Meeting! Create an account to get started.");
}


// =============================
// JOIN ROOM
// =============================

function joinRoom(roomName) {
    showMessage("You selected the " + roomName + " room.");
}


// =============================
// SCROLL TO ROOMS
// =============================

function scrollToRooms() {
    document.getElementById("rooms").scrollIntoView({
        behavior: "smooth"
    });
}


// =============================
// MESSAGE POPUP
// =============================

function showMessage(message) {

    const existingMessage = document.querySelector(".custom-message");

    if (existingMessage) {
        existingMessage.remove();
    }

    const messageBox = document.createElement("div");

    messageBox.className = "custom-message";

    messageBox.innerHTML = `
        <div class="message-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

    document.body.appendChild(messageBox);

    setTimeout(() => {
        if (messageBox) {
            messageBox.remove();
        }
    }, 3500);
}


// =============================
// CLOSE MOBILE MENU
// =============================

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navMenu").classList.remove("active");

    });

});
