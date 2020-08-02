var searchButton = document.getElementById("headerSearchButton");
searchButton.onclick = openSearchBox;

var closeSearchButton = document.getElementById("closeSearchButton");
closeSearchButton.onclick = closeSearchBox;

var searchArea = document.getElementById("searchArea");

var headerMenuButton = document.getElementById("headerMenuButton");
headerMenuButton.onclick = openOffCanvasMenu;

document.body.onscroll = onBodyScroll;

var mainHeader = document.getElementById("mainHeader");

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

function onBodyScroll () {
	if (window.scrollY > 0) {
		mainHeader.classList.add("sticky");
	}
	else {
		mainHeader.classList.remove("sticky");
	}
}