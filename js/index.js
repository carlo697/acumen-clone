var searchButton = document.getElementById("headerSearchButton");
searchButton.onclick = openSearchBox;

var closeSearchButton = document.getElementById("closeSearchButton");
closeSearchButton.onclick = closeSearchBox;

var searchArea = document.getElementById("searchArea");

var headerMenuButton = document.getElementById("headerMenuButton");
headerMenuButton.onclick = openOffCanvasMenu;

function openSearchBox() {
	searchArea.classList.add("active");
}

function closeSearchBox() {
	searchArea.classList.remove("active");
}

function openOffCanvasMenu() {
	if (document.body.classList.contains("menu-active"))
	{
		document.body.classList.remove("menu-active");
	}
	else
	{
		document.body.classList.add("menu-active");
	}
	
}