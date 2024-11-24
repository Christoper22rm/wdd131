function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10;
    const windSpeed = 5;
  
    let windChill = 'N/A';
    if (temperature <= 10 && windSpeed > 4.8) {
      windChill = `${calculateWindChill(temperature, windSpeed)} °C`;
    }
  
    document.getElementById('windchill').textContent = windChill;
  
    const currentYear = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
  });

