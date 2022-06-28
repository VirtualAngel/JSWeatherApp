// Creates an object to store functions and variables for the API
// 1. Use apiKey to access weather from openweathermap.org
// 2. Fetch the weather url from openweathermap's generated URL and console.log it
// 3. Edit the fetchWeather function to pass in any city and the appKey
// 4. Create a new function to display the weather on the page
let weather = {
    "apiKey": "6ebd44e559df99375a356aa98f5496f3",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid=" 
             + appKey
             )
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
};