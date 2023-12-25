function submitSearch(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    executeSearch(searchTerm);
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const searchTerm = event.target.value.trim();
        executeSearch(searchTerm);
    }
}

function executeSearch(searchTerm) {
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    if (searchTerm !== "") {
        console.log("Search term:", searchTerm);
        console.log("Encoded search term:", encodedSearchTerm);

        // Redirect to the search results page with the search query as a parameter
        window.location.href = `search-results.html?query=${encodedSearchTerm}`;
    } else {
        alert("Please enter a search term.");
    }
}