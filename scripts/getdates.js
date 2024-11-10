// JavaScript to dynamically display the current year and last modified date

// Display the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Display the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent += lastModified;
