    //start document
//$(document).ready(function() {
const api = {
APIkey: "3e34a43f5ddaac920411ac37ac4eaed4",
queryURL: "https://api.openweathermap.org/data/2.5/"
}
//event listener in search bar to respond to enter key "13"
var inputcity = document.querySelector(".input-city");
inputcity.addEventListener("keypress", setQuery);

//var button = document.getElementById("searchBtn")
//button.addEventListener("onclick", setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        event.preventDefault();

        getResults(inputcity.value);
        console.log(inputcity.value);
    }
}


//insted of using $.ajax, im using fetch in the function and using the api.queryURL and api.APIkey
//using also an arrow function
function searchReturn(query) {
    fetch(`${api.queryURL}weather?q=${query}&units=metric&APPID=${api.APIkey}`)
    .then(weather => {
        return weather.json();
    })
    .then(displayResults);
}
//}
//$.ajax({
  //  url: queryURL,
    //method: "GET",
//}).then(weather(weather.JSON()));
//})
function displayResults(weather) {
    console.log(weather);
    var city = document.querySelector(".location.city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    var now = new date();
    var date = document.querySelector(".location.date");
    date.innerText = dateBuilder(now);

    var temp = document.querySelector(".current.temp");
    temp.innerHTML = `${math.round(weather.main.temp)}<span>c</span>`;

    var weather_el = document.querySelector("current.weather");
    weather_el.innerText = weather.weather[0].main;




}

function dateBuilder (d) {
    var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "July.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday", "sunday"];

    var day = days[date.getDay()];
    var date = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();

    return`${day} ${date} ${month} ${year}`;
}














//end document
//})