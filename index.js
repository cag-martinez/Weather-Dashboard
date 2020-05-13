$(document).ready(function() {

function displayWeatherInfo() {

    var data = $(this).attr("data-name");
    var key = "cbae5629a523c8fdebf85664f8e2b130";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Bujumbura,Burundi&appid=" + key;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        var tempkelvin = response.main.temp
        
        $(".temp").text(toFarh(tempkelvin))
        $(".humidity").text(main.humidity);
        function toFarh (a) {
            var F = Math.round((a-273.15)* 1.8 + 32)
            return F + "Farhenheit"
        }
        //var newdiv = $("<div>");

        //newdiv.addClass("search-div");
        //newdiv.prependTo("day-view");

        //$("<a>").text("Temperature: " + response.year).appendTo(newdiv);
        console.log(response);
        //displayWeatherInfo();
    });
}
displayWeatherInfo();
//function renderButtons() {
//}



});