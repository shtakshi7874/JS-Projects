const APIKey = "2907eb5027e004fd64b4127c004dfd2f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const locationIcon=document.querySelector(".location-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${APIKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {                
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".min-temp").innerHTML=data.main.temp_min + " °c ";
        document.querySelector(".max-temp").innerHTML=data.main.temp_max + " °c ";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/3323/3323219.png?ga=GA1.1.1236349696.1686482087&";
            document.querySelector(".card").style.background="linear-gradient(135deg, #00feba, #5b548a)";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/3222/3222800.png?ga=GA1.1.1236349696.1686482087&";
            document.querySelector(".card").style.background="linear-gradient(135deg, red, orange)";
            locationIcon.src="https://cdn-icons-png.freepik.com/256/1237/1237970.png?ga=GA1.1.1236349696.1686482087&";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://t3.ftcdn.net/jpg/05/47/92/58/240_F_547925823_uauubM0miVvTZU4mXblRU3OIv8eJQXIS.jpg";
            document.querySelector(".card").style.background="linear-gradient(135deg, #00feba, #5b548a)";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/14368/14368574.png?ga=GA1.1.1236349696.1686482087&";
            document.querySelector(".card").style.background="linear-gradient(135deg, red, orange)";
            locationIcon.src="https://cdn-icons-png.freepik.com/256/1237/1237970.png?ga=GA1.1.1236349696.1686482087&";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/11574/11574174.png?ga=GA1.1.1236349696.1686482087&";
            document.querySelector(".card").style.background="linear-gradient(135deg, #00feba, #5b548a)";

        }
        else {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/256/12607/12607703.png?ga=GA1.2.1236349696.1686482087&";
            document.querySelector(".card").style.background="linear-gradient(135deg, red, orange)";
            locationIcon.src="https://cdn-icons-png.freepik.com/256/1237/1237970.png?ga=GA1.1.1236349696.1686482087&";

        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

