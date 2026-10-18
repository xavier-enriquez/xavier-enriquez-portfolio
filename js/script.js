// script.js - makes the Contact Me section work

// grab the stuff I need from the page
const sendBtn = document.querySelector("#sendBtn");
const emailInput = document.querySelector("#emailInput");
const contactMessage = document.querySelector("#contactMessage");

// runs when someone clicks Send
function sendEmail() {
    let email = emailInput.value.trim();

    // check if they actually typed an email
    if (email === "" || !email.includes("@")) {
        contactMessage.textContent = "Please type in a real email first.";
        contactMessage.style.color = "#c0392b";
    } else {
        contactMessage.textContent = "Thanks! I'll get back to you at " + email + ".";
        contactMessage.style.color = "green";
        emailInput.value = "";
    }
}

// hook up the button
sendBtn.addEventListener("click", sendEmail);
