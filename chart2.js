const ctx2 = document.getElementById('doughnut');

async function fetchDoughnutData() {
  try {
    const response = await fetch('https://api.worldbank.org/v2/country/UKR/indicator/SP.DYN.CBRT.IN?format=json');
    const data = await response.json();

    const years = [];
    const birthRates = [];

    for (let year = 2023; year >= 2017; year--) {
      const entry = data[1].find(item => item.date === String(year));
      years.push(year);
      birthRates.push(entry ? entry.value : null);  
    }

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: years.reverse(),
      datasets: [{
        label: 'Народжуваність в Україні (на 1000 осіб),
        data: birthRates.reverse(),
        borderWidth: 1,
        backgroundColor: [
            'rgba(240, 128, 128, 0.2)', 
            'rgba(54, 162, 235, 0.2)', 
            'rgba(255, 0, 255, 0.2)', 
            'rgba(188, 143, 143, 0.2)', 
            'rgba(153, 102, 255, 0.2)', 
            'rgba(0, 250, 154, 0.2)' 
            'rgba(127, 255, 0, 1)'  
          ],
          borderColor: [
            'rgba(240, 128, 128, 1)', 
            'rgba(54, 162, 235, 1)', 
            'rgba(255, 0, 255, 1)', 
            'rgba(188, 143, 143, 1)', 
            'rgba(153, 102, 255, 1)', 
            'rgba(0, 250, 154, 1)'  
            'rgba(127, 255, 0, 1)'  
          ]
      }]
    },
    options: {
      responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        }
      }
    });
  } catch (error) {
    console.error("Помилка завантаження даних для кільцевої діаграми: ", error);
  }
}

fetchDoughnutData();
