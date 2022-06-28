// Creates an object to store functions and variables for the API
// 1. Use apiKey to access weather from openweathermap.org
// 2. Fetch the weather url from openweathermap's generated URL and console.log it
// 3. Edit the fetchWeather function to pass in any city and the appKey
// 4. Create a new function to display the weather on the page
// 5. Use document.querySelector + innerText, src, etc. to actually display on page and not use console.log
// 9. Adds a city-specific photo from unsplash

let weather = {
    "apiKey": "6ebd44e559df99375a356aa98f5496f3",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city 
             + "&units=imperial&appid=" 
             + this.apiKey
             )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1600x900/?" + name + "')"
    },

    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// 6. Make the search bar work by adding the function above and an an event listener below

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

// 7. Add an event listener for the enter keypress after a city is typed into the search bar

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search();
    }
});

// 8. When the page initially loads, call the weather.fetchWeather function for an initial city

weather.fetchWeather("Billings");