import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Guadalupe Villa', 'Joaquin Valle', 'Sofia Vazquez', 'Rafael Villegas'],
  datasets: [
    {
      label: 'Avance',
      data: [28.6, 28.6, 14.3, 28.6],
      backgroundColor: [
        'rgba(181, 9, 46, 0.53)',
        'rgba(156, 45, 45, 0.8)',
        'rgba(152, 61, 61, 0.68)',
        'rgba(214, 7, 7, 0.58)',
      ],
      borderColor: [
        'rgba(208, 7, 50, 0.6)',
        'rgba(176, 51, 51, 0.81)', 
        'rgba(183, 73, 73, 0.75)',
        'rgba(234, 8, 8, 0.66)',
      ],
      borderWidth: 1,
    },
  ],
};

// Configuración personalizada
const options: ChartOptions<'pie'> = {
  plugins: {
    legend: {
      position: 'right',       // Mueve la leyenda al lado derecho
      align: 'start',          // Alinea los labels al inicio
      labels: {
        boxWidth: 25,          // Ancho del cuadro de color
        padding: 25,           // Espaciado entre items
        usePointStyle: true,   // Usa iconos circulares
        pointStyle: 'circle',  // Estilo del icono
      },
    },
  },
  layout: {
    padding: 20,               // Espaciado interno del gráfico
  },
  responsive: true,
  maintainAspectRatio: false,  // Permite ajustar el tamaño libremente

  // Para reducir el tamaño del gráfico (radio)


  // Ajusta el radio del gráfico (90% del contenedor)
  radius: '90%',               // Reduce el tamaño del círculo
};

export default function ChartPie() {
  return (
    <div style={{ position: 'relative', width: '600px', height: '400px' }}>
      <h2 className='title'>Dolphin Devs</h2>
      <p className='nameProject'> Explore Your University </p>
      <Pie 
        data={data} 
        options={options}
      />
</div>
);
}