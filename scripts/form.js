const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    if (!localStorage.getItem("reviewCounter")) {
        localStorage.setItem("reviewCounter", 0);
    }

    document.getElementById("product-review-form").addEventListener("submit", () => {
        let counter = parseInt(localStorage.getItem("reviewCounter"), 10);
        localStorage.setItem("reviewCounter", counter + 1);
    });
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;