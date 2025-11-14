/* CONTACT US FORM */
contactUsBtn = document.getElementById('contact-us-btn');

function processMessage(event) {
    /* Suppress default behaviour of the form. */
    event.preventDefault();

    /* Process Contact Us form */
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you!')
    }

    resetContactForm();
} 

function resetContactForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}

contactUsBtn.addEventListener('click', processMessage);

