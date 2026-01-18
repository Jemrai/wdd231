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


document.querySelector("#grid").addEventListener("click", () => display.className = "grid");
document.querySelector("#list").addEventListener("click", () => display.className = "list");


document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();

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