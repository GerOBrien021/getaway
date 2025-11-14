/* DESTINATION RECOMMENDATIONS */
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');

function showRecommendations() {
    const term = document.getElementById('search-term').value.trim().toLowerCase();
    const container = document.getElementById('recommendations-container');

    container.innerHTML = '';

    container.innerHTML += `<div class="recommendation-card">`;
    container.innerHTML += `<img src="./sydney.jpg" alt="Sydney" />`;
    container.innerHTML += `<h3>Sydney, Australia</h3>`;
    container.innerHTML += `<p>A beautiful coastal city with a relaxed atmosphere, featuring the Sydney Opera House, Harbour Bridge, and stunning beaches.</p>`;
    container.innerHTML += `<button>Visit</button>`;
    container.innerHTML += `</div>`;

} /* end of fn showRecommendations */

function clearRecommendations() {
    document.getElementById('search-term').value = "";
    document.getElementById('recommendations-container').innerHTML = "";
}

searchBtn.addEventListener('click', showRecommendations);
clearBtn.addEventListener('click', clearRecommendations);
