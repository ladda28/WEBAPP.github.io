// script.js
new Vue({
    el: '#app',
    data: {
        weatherData: null
    },
    methods: {
        async getWeather() {
            const city = prompt('Enter city name:');

            if (!city) {
                alert('Please enter a city name!');
                return;
            }

            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b1fdf34fa91b4c02abcbbc8d83749be&units=metric`);
                const data = await response.json();

                if (response.ok) {
                    this.weatherData = data;
                } else {
                    alert(`Error: ${data.message}`);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
                alert('Error fetching weather data. Please try again.');
            }
        }
    }
});
