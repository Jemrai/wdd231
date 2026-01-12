document.addEventListener('DOMContentLoaded', () => {
    // Set copyright year
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    const lastModifiedP = document.getElementById('lastModified');
    lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
});