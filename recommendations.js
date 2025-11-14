/* DESTINATION RECOMMENDATIONS */
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');

function showRecommendations() {
    const term = document.getElementById('search-term').value.trim().toLowerCase();
    const container = document.getElementById('recommendations-container');

    

    if (term) {
        const card = document.createElement('div');
        card.classList.add('recommendation-card');
        card.innerHTML = `
          <img src="./sydney.jpg" alt="Sydney" />
          <h3>${term}</h3>
          <p>A beautiful coastal city with a relaxed atmosphere, featuring the Sydney Opera House, Harbour Bridge, and stunning beaches.</p>
          <button>Visit</button>
          </div>
          `;
    
        container.appendChild(card);
    }

} /* end of fn showRecommendations */

function clearRecommendations() {
    document.getElementById('search-term').value = "";
    document.getElementById('recommendations-container').innerHTML = "";
}

searchBtn.addEventListener('click', showRecommendations);
clearBtn.addEventListener('click', clearRecommendations);
