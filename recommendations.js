/* DESTINATION RECOMMENDATIONS */
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');

function showRecommendations() {
    const term = document.getElementById('search-term').value.trim().toLowerCase();
    const recommendations = document.getElementById('recommendations-container');

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        /* The search term might be a substring of the property name e.g. 'beach' instead of 'beaches.*/        
        const destinationTypes = Object.getOwnPropertyNames(data);
        destinationTypes.forEach(item => {
            if (item.indexOf(term) != -1) {
                console.log(item);
                console.log(data[item]);

            }
        })
    })
    .catch(error => {
        console.error('Error:', error);
        recommendations.innerHTML = 'An error occurred while fetching data.';
    });




    /*
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
    
        recommendations.appendChild(card);
    }
    */

} /* end of fn showRecommendations */

function clearRecommendations() {
    document.getElementById('search-term').value = "";
    document.getElementById('recommendations-container').innerHTML = "";
}

searchBtn.addEventListener('click', showRecommendations);
clearBtn.addEventListener('click', clearRecommendations);
