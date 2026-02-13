// js/discover.js
import { realEstateItems } from './information.mjs';

function getDaysSinceLastVisit() {
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');
  if (!lastVisit) {
    localStorage.setItem('lastVisit', now);
    return null; 
  }
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  localStorage.setItem('lastVisit', now);
  return days;
}

function displayVisitMessage() {
  const days = getDaysSinceLastVisit();
  const messageEl = document.getElementById('visit-message');
  if (days === null) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
  } else if (days < 1) {
    messageEl.textContent = "Back so soon! Awesome!";
  } else {
    const dayWord = days === 1 ? "day" : "days";
    messageEl.textContent = `You last visited ${days} ${dayWord} ago.`;
  }
}

function generateCards() {
  const container = document.getElementById('cards-container');
  realEstateItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h2>${item.name}</h2>
      <figure>
        <img src="${item.image}" alt="${item.name}">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayVisitMessage();
  generateCards();
});

document.getElementById('menu-button').addEventListener('click', () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
});
