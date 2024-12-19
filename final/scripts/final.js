document.addEventListener("DOMContentLoaded", function() {
    const newsSection = document.querySelector('.news-section');
    newsSection.style.opacity = 0;
    newsSection.style.transition = "opacity 1s ease";

    setTimeout(() => {
        newsSection.style.opacity = 1;
    }, 200);
});

const menuCheckbox = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menuCheckbox.addEventListener('change', () => {
    if (menuCheckbox.checked) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
});

const form = document.querySelector('form');
const formDataKey = 'formData';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        message: form.elements['message'].value
    };
    localStorage.setItem(formDataKey, JSON.stringify(formData));
    alert('Thank you! Your message has been saved.');
    form.reset();
});

function displaySavedData() {
    const savedData = localStorage.getItem(formDataKey);
    if (savedData) {
        const { name, email, message } = JSON.parse(savedData);
        const savedDataElement = document.createElement('div');
        savedDataElement.className = 'saved-data';
        savedDataElement.innerHTML = `
            <h3>Previously Submitted Data:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        document.body.appendChild(savedDataElement);
    }
}
displaySavedData();