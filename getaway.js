/* Contact Form */
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
} 

contactUsBtn.addEventListener('click', processMessage);

