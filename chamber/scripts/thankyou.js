// JS específico para thankyou.html: mostrar datos enviados del form de manera indexada

// Capturar parámetros GET de la URL
const urlParams = new URLSearchParams(window.location.search);
const submittedData = document.getElementById('submitted-data');

// Lista de campos requeridos a mostrar
const fields = [
    { key: 'fname', label: 'First Name' },
    { key: 'lname', label: 'Last Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'phone', label: 'Mobile Phone Number' },
    { key: 'orgname', label: 'Business/Organization Name' },
    { key: 'timestamp', label: 'Submission Timestamp' }
];

// Insertar los datos en la lista ordenada
fields.forEach(field => {
    const value = urlParams.get(field.key) || 'Not provided'; // Valor por defecto si falta
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${field.label}:</strong> ${value}`;
    submittedData.appendChild(listItem);
});

// Footer dinámico
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Manejo del menú hamburguesa (igual que en join.js para consistencia)
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        menuButton.classList.toggle("open");
    });
}

const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        menuButton.classList.remove("open");
    });
});