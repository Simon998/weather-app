/*using the api*/
let weather = {
    apikey:"ee6867b810392da401e54e886a5d656a",
    fetchweather: function (city) {
       fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
         + this.apiKey
         )
        .then((response) => response.json()) 
        .then((data)=>this.displayWeather(data));
    },
   
   
    displayWeather: function (data) {
        let { name } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        let { speed } = data.wind;
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
         document.querySelector(".temp").innerText = temp + "&#8451";
         document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
         document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/hr";
      document.querySelector(".weather").classList.remove("loading")
    
      document.body.style.backgroundImage="URL(https://source.unsplash.com/1600x900/?" + name +")"
      

    },

    search:function(){
        this.fetchweather(document.querySelector).value;
    }
};

let button = document.querySelector(".search-button").addEventListener("click" , function() {
    weather.search();
});
console.log(button)

document.querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });



    
    