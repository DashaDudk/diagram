const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'народжуваність в Україні, тис.осіб',
      data: [364.0, 335.9, 308.8, 299.1, 277.8, 209.4],
      borderWidth: 1,
      backgroundColor: [
        'rgba(240, 128, 128, 0.2)', 
        'rgba(54, 162, 235, 0.2)', 
        'rgba(255, 0, 255, 0.2)', 
        'rgba(188, 143, 143, 0.2)', 
        'rgba(153, 102, 255, 0.2)', 
        'rgba(0, 250, 154, 0.2)'  
      ],
      borderColor: [
        'rgba(240, 128, 128, 1)', 
        'rgba(54, 162, 235, 1)', 
        'rgba(255, 0, 255, 1)', 
        'rgba(188, 143, 143, 1)', 
        'rgba(153, 102, 255, 1)', 
        'rgba(0, 250, 154, 1)' 
      ]
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