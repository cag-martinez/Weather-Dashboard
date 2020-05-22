function renderTime() {
    //date
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000) {
        year += 1900
    }

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray =["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];
    var montharray =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // //time
     var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }
        
        if(h < 10){
            h = "0" + h;
        }
        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }

        var myClock = document.querySelector("h5");
        myClock.textContent = " " +dayarray [day]+ " " +daym+ " " +montharray[month]+ " " +year;
        
        myClock.innerText = " " +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;

        setTimeout("renderTime()", 1000);
    }
renderTime(); 

    
    //start document
//$(document).ready(function() {
const api = {
APIkey: "3e34a43f5ddaac920411ac37ac4eaed4",
queryURL: "https://api.openweathermap.org/data/2.5/"
}
//event listener in search bar to respond to enter key "13"
var inputcity = document.querySelector(".input-city");
//inputcity.addEventListener("keypress", setQuery);

var button = document.getElementById("searchBtn")
//button.addEventListener("onclick", setQuery);

$('#searchBtn').on('click', function(event){
    event.preventDefault()
    console.log('we got clciked!!', $('.input-city').val())
    var cityToSearch = $('.input-city').val()
    searchReturn(cityToSearch);
})


function searchReturn(query) {
console.log('about to serach api')
    $.ajax({
        url: `${api.queryURL}weather?q=${query}&units=metric&APPID=${api.APIkey}`,

    }).then(function(data){
        console.log('what we found from weather!!', data.name)
        console.log('This i the temp', data.main.temp)
        console.log('this is the wins speed', data.wind.speed);
        console.log(data.coord)
        //var weatherIcon = $('<img>')
        var tempH1 = $('<a>');
        var humidityH1 = $('<a>');
        var windSpeedh1 = $('<a>');
        var uvIndexh1 = $('<a>');
        //var image = $('<img>');
        //weatherIcon.iconId(data.weather[0].icon);
        //image.attr('class','tomsCoolStyleClass');
        tempH1.text(data.main.temp);
        humidityH1.text(data.main.humidity);
        windSpeedh1.text(data.wind.speed);
        uvIndexh1.text(data.coord)
        //$('.weather-icon').appendto(weatherIcon);
        $('.temperature').append(tempH1);
        $('.humidity').append(humidityH1);
        $('.wind-speed').append(windSpeedh1);
        $('.uv-index').append(uvIndexh1);

        
    })
    
}




// function displayResults(weather) {
//     console.log(weather);
//     var city = document.querySelector(".location.city");
//     city.innerText = `${weather.name}, ${weather.sys.country}`;

//     var now = new date();
//     var date = document.querySelector(".location.date");
//     date.innerText = dateBuilder(now);

//     var temp = document.querySelector(".current.temp");
//     temp.innerHTML = `${math.round(weather.main.temp)}<span>c</span>`;

//     var weather_el = document.querySelector("current.weather");
//     weather_el.innerText = weather.weather[0].main;




// }

// function dateBuilder (d) {
//     var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "July.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
//     var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "saturday", "sunday"];

//     var day = days[date.getDay()];
//     var date = d.getDate();
//     var month = months[d.getMonth()];
//     var year = d.getFullYear();

//     return`${day} ${date} ${month} ${year}`;
// }














//end document
//})