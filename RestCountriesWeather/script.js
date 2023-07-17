async function getCountries() {
  const restCountriesApiUrl = "https://restcountries.com/v3.1/all";
  try {
    const response = await fetch(restCountriesApiUrl);
    const countries = await response.json();
    
    var container = document.createElement("DIV");
    container.setAttribute("class", "container");

    var title = document.createElement("H1");
    title.setAttribute("id", "title");
    title.setAttribute("class", "text-center");
    title.innerHTML = "Rest Countries Weather";
    container.appendChild(title);

    var cards = document.createElement("DIV");
    cards.setAttribute("class", "cards");
    cards.setAttribute("id", "cards");

    var row = document.createElement("div");
    row.setAttribute("class", "row");

    countries.forEach((country) => {
  

      row.innerHTML += ` 
      <div class="col-lg-4 col-sm-12">
        <div class="card" style="width: 14rem;">
        <div class="card-header">
          <h6 class="card-title text-center">${country.name.common}</h6>
        </div>
          
          <div class="card-body">
            <img class="card-img" src="${country.flags.png}" alt="Card image cap">  
            <br/>
            <p class="card-text">Capital: ${
              country.capital && country.capital[0]
            }</p>
            <p class="card-text">Region: ${country.region}</p>
            <p class="card-text">Country Code: ${country.cca3}</p>
            <p class="card-text">Latlng: ${country.latlng[0]}, ${country.latlng[1]}</p>
            <p class="card-text">Population: ${country.population}</p>
        
          </div>
          <div class="button text-center">
            <a href="#" class="btn btn-primary btn-sm" onclick='getWeather(${
              country.latlng[0]
              }, ${country.latlng[1]})'>Click for weather</a>
          </div>
        </div>
      </div>`;
    });

    cards.appendChild(row);
    container.appendChild(cards);
    document.body.appendChild(container);
  } catch (error) {
    console.log("Error: ", error);
  }
}

async function getWeather(lat, lon) {
  const apiKey = "3ee9606911196575fbae0850d2da49c4";
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  const weather = await fetch(weatherApiUrl);
  const weatherData = await weather.json();
  window.alert(`  Temperature : ${weatherData.main.temp} Celsius,
  Feels like: ${weatherData.main.feels_like} Celsius
  Humidity: ${weatherData.main.humidity}
  `);
}
