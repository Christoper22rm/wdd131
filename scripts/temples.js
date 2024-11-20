const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        const isMenuVisible = navMenu.style.display === 'block';
        navMenu.style.display = isMenuVisible ? 'none' : 'block';
        hamburger.textContent = isMenuVisible ? '☰' : '✖';
    });
} else {
    console.error('No se encontró el botón de hamburguesa o el menú de navegación.');
}
