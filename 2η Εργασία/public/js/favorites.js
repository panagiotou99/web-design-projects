//Get user's input 
const userSearchInput = document.getElementById("userSearchInput");

//Get button's DOM 
const button = document.getElementById("searchButton")

//Sends a DELETE request every time a Unfavorite" button is clicked
const unfavorite = document.querySelector('a.delete');
if (unfavorite) {
    unfavorite.addEventListener('click', (e) => {
        const endpoint = `/favorites/${unfavorite.dataset.doc}`;
        fetch(endpoint, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => window.location.href = data.redirect)
            .catch(err => console.log(err));
    });
}

//(Searchs in the database using the keywords given (not yet implemented)
function filterFavoriteBooks() {}

//We need the following event listener so whenever the user hits enter, the filtering starts without having to click
document.getElementById("userSearchInput")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
            button.click();
        }
    });