const apiKey = "5631701e2e4b6eb78cba01656e4876f5"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherResult = document.getElementById("weatherResult");

  if (city === "") {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>🌡️ Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>🌬️ Wind Speed:</strong> ${data.wind.speed} m/s</p>
      <p><strong>☁️ Condition:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
