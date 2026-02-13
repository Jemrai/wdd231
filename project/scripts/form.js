const weatherApiKey = "e87ea539f703dbcdb502bfaa0b650fe4"; 
const lat = 16.77; 
const lon = -3.01; 

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
    

    const days = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 3);
    const forecastHtml = days.map(day => `<p>${new Date(day.dt * 1000).toDateString()}: ${Math.round(day.main.temp)}°C</p>`).join('');
    
    document.getElementById('weather-data').innerHTML = `
        <p><strong>Current Temperature:</strong> ${temp}°C</p>
        <p><strong>Description:</strong> ${desc}</p>
        <h3>3-Day Forecast</h3>
        ${forecastHtml}
    `;
}

const membersUrl = "scripts/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error('Failed to load members');
        const members = await response.json();
        
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

getWeather();
getSpotlights();

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("open"); 
    });
} else {
    console.error("Error: No se encontró el botón del menú o el menú de navegación.");
}


const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show"); 
        menuButton.classList.remove("open"); 
    });
});


document.getElementById('timestamp').value = new Date().toISOString();


document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

