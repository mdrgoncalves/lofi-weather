const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
const cityRef = document.getElementById("city");

//Fetch weather data from API and display them
const getWeather = () => {
    let cityValue = cityRef.value;
    //If input field is empty
    if(cityValue.lenght === 0){
        result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        //Clear input field
        cityRef.value = "";
        fetch(url).then((resp) => resp.json())
        //If city name is valid
        .then(data => {
            result.innerHTML = 
            `<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${Math.round(data.main.temp)} &#176;C</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${Math.round(data.main.temp_min)} &#176;</h4>
                </div>
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${Math.round(data.main.temp_max)} &#176;</h4>
                </div>
            </div>
            `;
        })
        //If city name is invalid
        .catch(() => {
            result.innerHTML = `<h3 class="msg">City not found</h3>`;
        });
    }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);