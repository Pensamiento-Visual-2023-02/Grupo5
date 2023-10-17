function toggleGraph(graphNumber) {
    var graphElement = document.getElementById('chart' + graphNumber);
    if (graphElement.style.display === 'none') {
      graphElement.style.display = 'block';
    } else {
      graphElement.style.display = 'none';
    }
  }
  
  
  const data1 = {
      labels: ['beef bone free meat','beef meat with bone','buffalo bone free meat','mealworms','kangaroo meat',
      'lamb bone free meat','lamb meat with bone','pork bone free meat','bacon','pork neck','pork ham','pork sausages',
      'pork meat with bone','chicken bone free meat','emu bone free meat','duck meat bone free','turkey meat bone free',
      'chicken meat with bone','duck meat with bone'],
      datasets: [{
        label: 'emisiones de carbono por kg producido',
        data: [25.75, 17.96, 78.8, 2.84, 4.10, 25.23, 16.70, 5.72, 4.03, 4.03, 7.95, 17.94, 3.44, 3.68, 1.50, 4.10, 4.08, 2.82],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
   
    const data2 = {
      labels: ['butter', 'cream','mascarpone','mozzarella'
          ,'ricotta'
          ,'stracchino'
          ,'asiago'
          ,'camembert'
          ,'ceddar'
          ,'cheese'
          ,'cheese semi-hard'
          ,'emmental'
          ,'goat cheese'
          ,'grana padano'
          ,'armigiano reggiano'
          ,'pecorino'
          ,'eggs'
          ,'honey'
          ,'buffalo milk'
          ,'cow milk'],
      datasets: [{
        label: 'emisiones de carbono por kg producido',
        data: [,8.48 ,5.45,5.70 ,8.20 ,3.40 ,4.92 ,10.24 ,7.55 ,11.21 ,8.93 ,8.65 ,8.20 ,8.35 ,15.34 ,12.54 ,17.15 ,3.20 ,1.74 ,3.57 ,1.31
         
          ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
  
    const data3 = {
      labels: ['cereales',
      ,'citricos'
      ,'frutas'
      ,'hongos'
      ,'invernadero'
      ,'legumbres'
      ,'frutos secos'
      ,'vegetales'
      ,'berries'],
      datasets: [{
        label: 'emisiones de carbono por kg producido',
        data: [7.48, 2.49, 16.36, 2.06, 33.2, 4.25, 13.39, 11.49, 4.79, 7.48, 2.49, 16.36, 2.06],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
  
    const data4 = {
      labels: ['pez','pescado congelados','pezcado procesado','crustaceo'],
      datasets: [{
        label: 'emisiones de carbono por kg producido',
        data: [167.64, 38.29, 7.4, 76.3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
   
    const data6 = {
      labels: ['carne roja','pescado','frutas y verduras','productos lacteos','procesados'],
      datasets: [{
        label: 'emisiones de carbono por kg producido',
        data: [239.91, 289.63, 97.56,163.58, 174.46],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };
   
    const config1 = {
      type: 'bar',
      data: data1,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    };
   
    const config2 = {
      type: 'bar',
      data: data2,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
   
    const config3 = {
      type: 'bar',
      data: data3,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
   
    const config4 = {
      type: 'bar',
      data: data4,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
   
    const config6 = {
      type: 'bar',
      data: data6,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
   
    const chart1 = new Chart(document.getElementById('chart1'), config1);
    const chart2 = new Chart(document.getElementById('chart2'), config2);
    const chart3 = new Chart(document.getElementById('chart3'), config3);
    const chart4 = new Chart(document.getElementById('chart4'), config4);
    const chart6 = new Chart(document.getElementById('chart6'), config6);
   
  