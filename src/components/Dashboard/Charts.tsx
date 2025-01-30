import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // Importación automática de los módulos necesarios
import { ChartOptions, ChartData } from 'chart.js';

interface BarChartProps {
  // Si deseas personalizar las opciones o los datos del gráfico, puedes hacerlo aquí
}

const BarChart: React.FC<BarChartProps> = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null); // Referencia para guardar la instancia del gráfico

  useEffect(() => {
    if (chartRef.current) {
      // Destruir el gráfico anterior si existe
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Obtener el contexto del canvas
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Crear una nueva instancia de Chart.js
        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar', // Tipo de gráfico: barra
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas de las barras
            datasets: [
              {
                label: 'Ventas',
                data: [12, 19, 3, 5, 2], // Datos de las barras
                backgroundColor: '#A1232C60', // Color de fondo de las barras
                borderColor: 'rgb(255, 76, 11)', // Color del borde
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true, // Gráfico responsive
            scales: {
              y: {
                beginAtZero: true, // Comienza el eje Y en 0
              },
            },
            plugins: {
              legend: {
                position: 'top', // Posición de la leyenda
              },
            },
          } as ChartOptions, // Aseguramos que las opciones sean de tipo ChartOptions
        });
      }
    }

    // Limpiar el gráfico al desmontar el componente
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Dependencia vacía para crear el gráfico solo una vez al montar

  return (
    <div>
      <h2 className='title'>Avance por proyectos</h2>
      <canvas ref={chartRef} width="400" height="200" />
    </div>
  );
};

export default BarChart;
