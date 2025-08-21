const input = document.querySelector('#cityInput');
const btn = document.querySelector('#getWeather');
const result = document.querySelector('#weatherResult');
const apiKey = "dc4417b057f4c08cb3ba96a53d69950d";

btn.addEventListener('click', () => {
  const city = input.value.trim();

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  result.innerHTML = `<p class="text-blue-500 animate-pulse">Loading weather...</p>`;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        result.innerHTML = `<p class="text-red-500 font-semibold">❌ ${data.message}</p>`;
        return;
      }

      result.innerHTML = `
        <div class="flex flex-col items-center gap-2">
          <h2 class="text-2xl font-bold text-blue-700">${data.name}</h2>
          <p class="text-xl">🌡️ <span class="font-semibold">${data.main.temp}°C</span></p>
          <p class="capitalize">🌥️ ${data.weather[0].description}</p>
          <p>💨 Wind: <span class="font-semibold">${data.wind.speed} m/s</span></p>
        </div>
      `;
    })
    .catch(() => {
      result.innerHTML = `<p class="text-red-500 font-semibold">⚠️ Something went wrong! Please try again.</p>`;
    });
});
