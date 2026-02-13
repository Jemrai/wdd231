
const urlParams = new URLSearchParams(window.location.search);
const submittedData = document.getElementById('submitted-data');

const fields = [
    { key: 'fname', label: 'First Name' },
    { key: 'lname', label: 'Last Name' },
    { key: 'email', label: 'Email Address' },
    { key: 'phone', label: 'Mobile Phone Number' },
    { key: 'orgname', label: 'Business/Organization Name' },
    { key: 'timestamp', label: 'Submission Timestamp' }
];


fields.forEach(field => {
    const value = urlParams.get(field.key) || 'Not provided'; 
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${field.label}:</strong> ${value}`;
    submittedData.appendChild(listItem);
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

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