//Get the needed URI
const searchURI = "https://reststop.randomhouse.com/resources/works?search=";

//Get user's input 
const userSearchInput = document.getElementById("userSearchInput");

//Get button's DOM 
const button = document.getElementById("searchButton")

//Get result's DOM
const searchResults = document.getElementById("searchResults");
console.log(searchResults);

//Function that uses Fetch API to search in the URI given
function fetchSearchResults() {
    var keywords = userSearchInput.value;
    if (keywords !== "") {
        displayLoading()
        fetch(searchURI + keywords, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.ok ? response.json() : console.log("Fetching book data failed."))
            .then(jsondata => {
                console.log(jsondata);
                showSearchResults(jsondata);
            })
            .catch(error => console.log(error));
    } else {
        searchResults.innerHTML = ``;
    }
}

//Function that adds the books of the search result to the HTML page
function showSearchResults(data) {
    searchResults.innerHTML = ``;
    var work = data["work"];
    if (work === undefined) {
        searchResults.innerHTML = `<h2>No results found</h2>`
    } else if (!work.length) {
        searchResults.innerHTML = `<ul class = "book-results">
        <form action="/favorites" method="POST">
            <h2><input type="hidden" name="title" value="${work.titleweb}"/>${work.titleweb}</input></h2>
            <li><input type="hidden" name="subtitle" value="${work.titleSubtitleAuth}"/>${work.titleSubtitleAuth}</input></li>  
            <li><input type="hidden" name="author" value="${work.authorweb}"/>${work.authorweb}</input></li>
            <li><input type="hidden" name="id" value="${work.workid}">#${work.workid}</input></li>
            <button class="editBttn" id="${work.workid}">+Add to favorites</button>
        </form>
        </ul>`
    } else {
        for (let book of work) {
            var bookInfo = `<ul class = "book-results">
            <form action="/favorites" method="POST">
                <h2><input type="hidden" name="title" value="${book.titleweb}"/>${book.titleweb}</input></h2>
                <li><input type="hidden" name="subtitle" value="${book.titleSubtitleAuth}"/>${book.titleSubtitleAuth}</input></li>  
                <li><input type="hidden" name="author" value="${book.authorweb}"/>${book.authorweb}</input></li>
                <li><input type="hidden" name="id" value="${book.workid}">#${book.workid}</input></li>
                <button class="editBttn" id="${book.workid}">+Add to favorites</button>
            </form>
            <hr class="divider_line">
            </ul>`
            searchResults.innerHTML += bookInfo;
        }
    }
}

//We need the following event listener so whenever the user hits enter, the search starts without having to click
document.getElementById("userSearchInput")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
            button.click();
        }
    });

//Function that makes a loading bar appear, used while fetching data from the API 
function displayLoading() {
    searchResults.innerHTML = `<img src="media/loading.gif" id="loading_bar" alt="Loading id="loadingGIF>`;
}