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


/* DESTINATION RECOMMENDATIONS */
const term = document.getElementById('search-term').value.trim().toLowerCase();
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');
const container = document.getElementById('recommendations-container');

function showRecommendations() {
    container.innerHTML = '';

    container.innerHTML += `<div class="recommendation-card">`;
    container.innerHTML += `<img src="./sydney.jpg" alt="Sydney" />`;
    container.innerHTML += `<h3>Sydney, Australia</h3>`;
    container.innerHTML += `<p>A beautiful coastal city with a relaxed atmosphere, featuring the Sydney Opera House, Harbour Bridge, and stunning beaches.</p>`;
    container.innerHTML += `<button>Visit</button>`;
    container.innerHTML += `</div>`;

} /* end of fn showRecommendations */

function clearRecommendations() {
    term.value = '';
    container.innerHTML = '';
}

searchBtn.addEventListener('click', showRecommendations);
clearBtn.addEventListener('click', clearRecommendations);