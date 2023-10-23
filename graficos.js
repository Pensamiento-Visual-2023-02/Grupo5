function cambiarCursor(imagen) {
    imagen.style.cursor = "pointer";
}

function restaurarCursor(imagen) {
    imagen.style.cursor = "auto";
}

document.addEventListener("DOMContentLoaded", function() {
  // Primer gráfico
  var chart1Ctx = document.getElementById("dona1").getContext("2d");
  var chart1 = new Chart(chart1Ctx, {
      type: 'doughnut',
      data: {
          labels: ['vacuno', 'insectos','cordero','cerdo','aves','otros'],
          datasets: [{
              label: "online tutorial subjects",
              data: [122.51,3.57,41.93,43.11,20.38,8.41],
              backgroundColor: ['red', 'darkred', 'firebrick', 'indianred', 'lightcoral', 'tomato'],
              hoverOffset: 5
          }],
      },
      options: {
          responsive: false,
      },
  });

  // Segundo gráfico
  var chart2Ctx = document.getElementById("dona2").getContext("2d");
  var chart2 = new Chart(chart2Ctx, {
      type: 'doughnut',
      data: {
          labels: ['quesos', 'leche'
            ,'grasas'
            ,'otros'
            ,'yogurt'],

          datasets: [{
              label: "online tutorial subjects",
              data: [130.38, 6.32
                , 13.93
                , 4.94
                , 9.45],
              backgroundColor: ['gold', 'khaki', 'lightyellow', 'palegoldenrod', 'yellow'],
              hoverOffset: 5
          }],
      },
      options: {
          responsive: false,
      },
  });

  // Tercer gráfico
  var chart3Ctx = document.getElementById("dona3").getContext("2d");
  var chart3 = new Chart(chart3Ctx, {
      type: 'doughnut',
      data: {
          labels: ['pescado fresco', 'pescado congelado', 'pezcado procesado', 'crustaceos y moluscos'],
          datasets: [{
              label: "online tutorial subjects",
              data: [167.64
                , 38.29
                , 7.4
                , 76.3],
                backgroundColor: ['darkblue', 'royalblue','lightsteelblue', 'dodgerblue'],
              hoverOffset: 5
          }],
      },
      options: {
          responsive: false,
      },
  });

  var chart4Ctx = document.getElementById("dona4").getContext("2d");
  var chart4 = new Chart(chart4Ctx, {
      type: 'doughnut',
      data: {
          labels: ['cerveza', 'masas preparadas', 'harina y azucar', 'café', 'aceite y grasas', 'jugos', 
          'proteinas de origen vegetal' , 'enlatados', 'otros'],
          datasets: [{
            label: 'emisiones de carbono por kg producido',
            data: [2.18,
              17.91,
              29.31,
              14.9,
              33.15,
              25.8,
              24.72,
              10.76,
              15.73
              ,174.46
              ],
              backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue','red','orange','black'],
              hoverOffset: 5
          }],
      },
      options: {
          responsive: false,
      },
  });

  var chart5Ctx = document.getElementById("dona5").getContext("2d");
  var chart5 = new Chart(chart5Ctx, {
      type: 'doughnut',
      data: {
          labels: ['cereales'
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
            data: [7.48, 2.49, 16.36, 2.06, 33.2, 4.25, 13.39, 11.49, 4.79],
              backgroundColor: ['green', 'lime', 'forestgreen', 'seagreen', 'limegreen', 'springgreen', 'mediumseagreen', 'chartreuse', 'darkolivegreen'],
              hoverOffset: 5
          }],
      },
      options: {
          responsive: false,
      },
  });

});


function toggleGraph(graphNumber) {
  var graphElement = document.getElementById('dona' + graphNumber);
  if (graphElement.style.display === 'none') {
    graphElement.style.display = 'block';
  } else {
    graphElement.style.display = 'none';
  }
}
  

  document.addEventListener("DOMContentLoaded", function() {
    var chrt = document.getElementById("chartoId").getContext("2d");
    var chartoId = new Chart(chrt, {
        type: 'polarArea',
        data: {
            labels: ['carne roja', 'pescado y productos marinos', 'frutas y verduras', 'productos lácteos', 'procesados'],
            datasets: [{
                label: "comparacion",
                data: [239.91, 289.63, 97.56, 163.58, 174.46],
                backgroundColor: ['red', 'darkblue', 'green', 'lightblue', 'gold'],
            }],
        },
        options: {
            responsive: false,
        },
    });
});

