function cambiarCursor(imagen) {
    imagen.style.cursor = "pointer";
}

function restaurarCursor(imagen) {
    imagen.style.cursor = "auto";
}

// Datos para el treemap
const data = [
    {
      type: 'treemap',
      labels: ['Procesados','Cerveza', 'Masas preparadas', 'Harina y azucar', 'Cafe', 'Aceite y grasas', 'Jugos',
      'Proteinas de origen vegetal' , 'Enlatados', 'Otros',
      'Frutas y verduras', 'Cereales', 'Citricos', 'Frutas', 'Hongos','Invernadero','Legumbres','Frutos secos','Vegetales','Berries',
      'Carne','Vacuno', 'Insectos','Cordero','Cerdo','Aves','Otros',
      'Productos lacteos','Quesos', 'Leche','Grasas','Otros','Yogurt',
      'Productos marinos','Pescado fresco', 'Pescado congelado', 'Pescado procesado', 'Crustaceos y moluscos'
      ],
      parents: ['','Procesados','Procesados','Procesados','Procesados','Procesados','Procesados','Procesados','Procesados','Procesados',
      '','Frutas y verduras', 'Frutas y verduras','Frutas y verduras','Frutas y verduras','Frutas y verduras','Frutas y verduras','Frutas y verduras','Frutas y verduras','Frutas y verduras',
      '', 'Carne','Carne','Carne','Carne','Carne','Carne',
      '', 'Productos lacteos', 'Productos lacteos', 'Productos lacteos', 'Productos lacteos', 'Productos lacteos',
      '', 'Productos marinos','Productos marinos','Productos marinos','Productos marinos'


      ],
      values: [174.46, 2.18,17.91,29.31,14.9,33.15,25.8,24.72,10.76,15.73,
        97.56,7.48, 2.49, 16.36, 2.06, 33.2, 4.25, 13.39, 11.49, 4.79,
        239.91,122.51,3.57,41.93,43.11,20.38,8.41,
        163.58, 130.38, 6.32, 13.93, 4.94, 9.45,
        289.63,167.64, 38.29, 7.4, 76.3

      ],
    }
  ];
  
  const layout = {
    margin: { t: 0, l: 0, r: 0, b: 0 },
    paper_bgcolor: 'white',
    autosize: true,
  };
  
  Plotly.newPlot('treemap-container', data, layout);

// Datos para el treemap
const data2 = [
  {
    type: 'treemap',
    labels: ['Emisiones de efecto invernadero','Carne roja', 'Pescado y productos marinos', 'Frutas y verduras', 'Productos lacteos', 'Procesados'],
    parents: ['', 'Emisiones de efecto invernadero','Emisiones de efecto invernadero','Emisiones de efecto invernadero','Emisiones de efecto invernadero','Emisiones de efecto invernadero'],
    values: [965.14,239.91, 289.63, 97.56, 163.58, 174.46],
  }
];

// Diseño y configuración del treemap
const layout2 = {
  margin: { t: 0, l: 0, r: 0, b: 0 },
  paper_bgcolor: 'white',
  autosize: true,
};

// Crea el treemap
Plotly.newPlot('treemap-comparison', data2, layout2);

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

