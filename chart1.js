const ctx = document.getElementById('barchart');

async function fetchBirthRateData() {
  try {
    const response = await fetch('https://api.worldbank.org/v2/country/UKR/indicator/SP.DYN.CBRT.IN?format=json');
    const data = await response.json();

    const years = data[1].map(entry => entry.date).reverse(); 
    const birthRates = data[1].map(entry => entry.value).reverse(); 

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: years,
    datasets: [{
      label: 'Народжуваність в Україні (1000 осіб)',
      data: birthRates,
      borderWidth: 1,
      backgroundColor: 'rgba(54, 162, 235, 0.2)', 
      borderColor: 'rgba(54, 162, 235, 1)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
    } catch (error) {
    console.error("Помилка завантаження даних з World Bank API: ", error);
  }
}

fetchBirthRateData();
