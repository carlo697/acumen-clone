var searchButton = document.getElementById("headerSearchButton");
searchButton.onclick = openSearchBox;

var closeSearchButton = document.getElementById("closeSearchButton");
closeSearchButton.onclick = closeSearchBox;

var searchArea = document.getElementById("searchArea");

function openSearchBox() {
	searchArea.classList.add("active");
}

function closeSearchBox() {
	searchArea.classList.remove("active");
}