function showweatherDetails(event) {
      event.preventDefault();
}

 const city = document.getElementById('city').value;
      const apiKey = 'fe5d7d9b34fbab7f079c52ff05d77a01'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=fe5d7d9b34fbab7f079c52ff05d77a01`;

 fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

 .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
