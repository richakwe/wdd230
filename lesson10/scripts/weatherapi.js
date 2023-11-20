const apiKey = '2c44643f26fe3e8a1e95b8920455c1f1';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=${apiKey}`;

// select HTML elements in the document
//const currentTemp = document.querySelector("#current-temp");
//const weatherIcon = document.querySelector("#weather-icon");
//const captionDesc = document.querySelector("figcaption");

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(weatherData) {
  const weatherInfoElement = document.getElementById('weather-info');
  const temp = weatherData.main.temp.toFixed(0);
  const iconsrc = weatherData.weather[0].icon;
  const desc = weatherData.weather[0].description;
  //currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  //weatherIcon.setAttribute("src", iconsrc);
  // weatherIcon.setAttribute("alt", desc);
  //captionDesc.textContent = desc;

  const htmlContent = `
    <p>The current temperature in Trier, Germany is <strong>${temp}°C</strong></p>
    <h2>Current Condition</h2>
    <figure>
      <img class="weather-img" alt="Weather icon" src="https://openweathermap.org/img/wn/${iconsrc}@2x.png">
      <img src="" alt="" id="weather-icon">
      <figcaption>${desc}</figcaption>
    </figure>
  `;

  weatherInfoElement.innerHTML = htmlContent;



}

apiFetch();


