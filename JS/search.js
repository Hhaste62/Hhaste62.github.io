document.querySelector("#search").addEventListener("click", function(e){
var search = document.getElementById("searchBar").value;
window.open("https://www.dandwiki.com/w/index.php?title=Special%3ASearch&search=" + search + "&go=Go");

			  e.preventDefault();
			})