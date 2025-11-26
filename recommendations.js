/* DESTINATION RECOMMENDATIONS */
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');

function showRecommendations() {
    const term = document.getElementById('search-term').value.trim().toLowerCase();
    const recommendations = document.getElementById('recommendations-container');
    recommendations.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        /* First, check if the search term is a country name. */
        const country = data.countries.find(item => item.name.toLowerCase() === term);
        if (country) {
            console.log('Country found! Here are the cities: ', country.cities);
        } else {
            /* The search term might be a destination type e.g. 'beaches' or 'temples'. */
            const destinationTypes = Object.getOwnPropertyNames(data);
            let destinationType = '';

            /* The search term might be a substring of a destination type e.g. 'beach' instead of 'beaches'.*/ 
            destinationTypes.forEach(item => {
                if (item.indexOf(term) != -1) {
                    destinationType = item;
                }
            })

            if (destinationType) {
                console.log('Destination Type found!', destinationType);
                console.log('Type of destinationType: ', typeof destinationType);

                /* Create the cards. */
                data[destinationType].forEach(dest => {
                    const card = document.createElement('div');
                    card.classList.add('recommendation-card');
                    card.innerHTML = `
                      <img src="${dest.imageUrl}" alt="${dest.name}" />
                      <h3>${dest.name}</h3>
                      <p>${dest.description}</p>
                      <button>Visit</button>
                      </div>
                      `;
                
                    recommendations.appendChild(card);
                });

            } else {
                /* No match for the search term. */

            }
        } 
    })
    .catch(error => {
        console.error('Error:', error);
        recommendations.innerHTML = 'An error occurred while fetching data.';
    });

} /* end of fn showRecommendations */

function clearRecommendations() {
    document.getElementById('search-term').value = "";
    document.getElementById('recommendations-container').innerHTML = "";
}

searchBtn.addEventListener('click', showRecommendations);
clearBtn.addEventListener('click', clearRecommendations);

/* Pressing Enter when in the search text box should also trigger search. */
searchBox = document.getElementById('search-term');
searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') showRecommendations();
});

