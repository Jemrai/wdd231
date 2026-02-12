// Weather API - Usando lat/lon para Timbuktu (Mali)
const weatherApiKey = "e87ea539f703dbcdb502bfaa0b650fe4"; // Reemplaza con tu clave real de OpenWeatherMap
const lat = 16.77; // Latitud de Timbuktu
const lon = -3.01; // Longitud de Timbuktu

async function getWeather() {
    try {
        const currentResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`);
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${weatherApiKey}`);
        
        if (!currentResponse.ok || !forecastResponse.ok) throw new Error('Failed to load weather data');
        
        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();
        
        displayWeather(currentData, forecastData);
    } catch (error) {
        console.error(error);
        document.getElementById('weather-data').innerHTML = '<p>Unable to load weather data. Check your API key and connection.</p>';
    }
}

function displayWeather(current, forecast) {
    const temp = Math.round(current.main.temp);
    const desc = current.weather[0].description;
    
    // Pronóstico de 3 días (cada 8 horas, toma el primero de cada día)
    const days = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    const forecastHtml = days.map(day => `<p>${new Date(day.dt * 1000).toDateString()}: ${Math.round(day.main.temp)}°C</p>`).join('');
    
    document.getElementById('weather-data').innerHTML = `
        <p><strong>Current Temperature:</strong> ${temp}°C</p>
        <p><strong>Description:</strong> ${desc}</p>
        <h3>3-Day Forecast</h3>
        ${forecastHtml}
    `;
}

// Spotlights (del JSON de miembros)
const membersUrl = "scripts/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error('Failed to load members');
        const members = await response.json();
        
        // Filtrar gold/silver y seleccionar 2-3 aleatorios
        const eligible = members.filter(m => m.level.includes('Gold') || m.level.includes('Silver'));
        const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        displaySpotlights(selected);
    } catch (error) {
        console.error(error);
        document.getElementById('spotlights-container').innerHTML = '<p>Unable to load spotlights.</p>';
    }
}

function displaySpotlights(spotlights) {
    const container = document.getElementById('spotlights-container');
    container.innerHTML = spotlights.map(member => `
        <div class="spotlight-card">
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}">${member.website}</a></p>
            <p><strong>Membership:</strong> ${member.level}</p>
        </div>
    `).join('');
}

// Inicializar funciones
getWeather();
getSpotlights();

// Footer dinámico
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;