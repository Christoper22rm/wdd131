const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
        templeName: "Quito Ecuador",
        location: "Quito, Ecuador",
        dedicated: "2022, November, 20",
        area: 36780,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg",
    },
    {
        templeName: "Guayaquil Ecuador",
        location: "Guayaquil, Ecuador",
        dedicated: "1999, August, 2",
        area: 45000,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg",
    },
    {
        templeName: "Guatemala Guatemala",
        location: "Guatemala city, Guatemala",
        dedicated: "1984, December, 16",
        area: 11610,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg",
    },
    {
        templeName: "Bahia Blanca Argentina",
        location: "Bahia Blanca, Argentina",
        dedicated: "No dedicate",
        area: 19000,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-24944-main.jpg",
    },
    {
        templeName: "Bern Switzerland",
        location: "Switzerland",
        dedicated: "1992, October, 17",
        area: 15546,
        imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg",
    }
  ];
  
  const templesContainer = document.getElementById("templesContainer");
  
  // Function to display temples
  function displayTemples(filteredTemples) {
    templesContainer.innerHTML = "";
    filteredTemples.forEach((temple) => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area} sq ft</p>
      `;
      templesContainer.appendChild(templeCard);
    });
  }
  
  // Filters
  document.getElementById("showAll").addEventListener("click", () => displayTemples(temples));
  document.getElementById("filterOld").addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() < 1900);
    displayTemples(oldTemples);
  });
  document.getElementById("filterNew").addEventListener("click", () => {
    const newTemples = temples.filter((temple) => new Date(temple.dedicated).getFullYear() > 2000);
    displayTemples(newTemples);
  });
  document.getElementById("filterLarge").addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
  });
  document.getElementById("filterSmall").addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
  });
  

  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
  
  displayTemples(temples);
  