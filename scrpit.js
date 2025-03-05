const api_key  = "65bd751a016a2051fd61700276a6c419"
const searchBtn = document.getElementById("searchBtn")
const cityInput = document.getElementById("cityInput")
const weatherDisplay = document.getElementById("weatherDisplay")
const darkModeToggle = document.getElementById("darkModeToggle")


searchBtn.addEventListener("click",()=>{
    const city = cityInput.value;
    if (city){
        getWeathercity(city);
    }
});

async function getWeathercity(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
    try{
        const response = await fetch(url)
        const data = await response.json()
    
        if (data.cod){
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>🌡️ ${data.main.temp}°C</p>
                <p>☁️ ${data.weather[0].description}</p>
                <p>💨 Wind: ${data.wind.speed} m/s</p>
            `
        }
        else{
            weatherDisplay.innerHTML = "<p>City Not Found</p>"
        }
    }
    catch(err){
        console.error("Error fetching API", err)
        weatherDisplay.innerHTML = "<p>Failed to Fetch API</p>"
    }

}

darkModeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
})