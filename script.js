// your code here
let name = document.getElementById("name")
let year = document.getElementById("year")
let click = document.getElementById("button")
let title = document.getElementById("url")

function titleUpdate(event) {
	event.preventDefault();
	if(name.value === "" && year.value !== ""){
		title.innerHTML = "https://localhost:8080/?" + "year=" + year.value
	}else if(name.value !== "" && year.value === ""){
		title.innerHTML = "https://localhost:8080/?" + "name=" + name.value
	}else{
		title.innerHTML = "https://localhost:8080/?"  + "name=" + name.value + "&year=" + year.value
	}
}
