const url = "data/members.json";
const display = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (members) => {
    display.innerHTML = "";
    members.forEach((member) => {
        let card = document.createElement("section");
        
        // Estructura interna de la tarjeta para que coincida con la imagen
        card.innerHTML = `
            <h3>${member.name}</h3>
            <p><em>${member.level || 'Business Tag Line'}</em></p>
            <hr>
            <div class="member-info-container">
                <img src="${member.image}" alt="${member.name}">
                <div>
                    <p><strong>EMAIL:</strong> ${member.email || 'info@gmail.com'}</p>
                    <p><strong>PHONE:</strong> ${member.phone}</p>
                    <p><strong>URL:</strong> <a href="${member.website}">${member.website}</a></p>
                </div>
            </div>
        `;
        display.appendChild(card);
    });
};

// Funcionalidad para cambiar vistas
document.querySelector("#grid").addEventListener("click", () => display.className = "grid");
document.querySelector("#list").addEventListener("click", () => display.className = "list");

// Datos de pie de página
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

if (menuButton && navMenu) {  // Verificación para evitar errores
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        
        // Opcional: Cambiar el icono a una "X" cuando esté abierto
        menuButton.classList.toggle("open");
    });
} else {
    console.error("Error: No se encontró el botón del menú o el menú de navegación.");
}

// Mejora: Cerrar el menú al hacer clic en un enlace (solo en móvil)
const navLinks = document.querySelectorAll("#nav-menu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");  // Oculta el menú
        menuButton.classList.remove("open");  // Resetea el botón
    });
});