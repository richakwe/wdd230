// script.js

// JavaScript code for fetching weather data from OpenWeatherMap API and displaying it on the website

const apiKey = 'YOUR_API_KEY';
const weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather?q=Cozumel&appid=' + apiKey;

// Function to fetch weather data
async function fetchWeatherData() {
  try {
    const response = await fetch(weatherEndpoint);
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    console.log('Error fetching weather data:', error);
  }
}

// Function to display weather data on the website
function displayWeatherData(data) {
  const temperature = data.main.temp;
  const condition = data.weather[0].description;
  const humidity = data.main.humidity;

  // Update the HTML elements with the weather data
  document.getElementById('temperature').textContent = temperature;
  document.getElementById('condition').textContent = condition;
  document.getElementById('humidity').textContent = humidity;
}

// Call the fetchWeatherData function to retrieve and display weather data
fetchWeatherData();