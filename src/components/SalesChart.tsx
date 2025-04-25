import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  className?: string;
}

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 16px;
`;

const SalesChart: React.FC<SalesChartProps> = ({ className }) => {
  const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  
  const data = {
    labels: months,
    datasets: [
      {
        label: 'B2B',
        data: [2500000, 3200000, 3100000, 4000000, 3600000, 3900000, 4200000, 4800000, 5100000, 5500000, 6200000, 8615253],
        borderColor: '#A060FC',
        backgroundColor: 'rgba(160, 96, 252, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#A060FC',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'B2C',
        data: [1800000, 1200000, 900000, 1100000, 1000000, 1500000, 1600000, 1400000, 1200000, 800000, 600000, -1542511],
        borderColor: '#30C7DC',
        backgroundColor: 'rgba(48, 199, 220, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#30C7DC',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: 'Итоги',
        data: [3000000, 3500000, 3800000, 4500000, 4800000, 5200000, 6000000, 7200000, 8000000, 9500000, 9800000, 10157764],
        borderColor: '#F5E230',
        backgroundColor: 'rgba(245, 226, 48, 0.1)',
        tension: 0.4,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#F5E230',
        pointBorderWidth: 3,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 20,
          color: '#323F47',
          font: {
            family: "'Proxima Nova', sans-serif",
            size: 14,
            weight: 600,
          },
        },
      },
      tooltip: {
        backgroundColor: '#FFFFFF',
        titleColor: '#323F47',
        bodyColor: '#323F47',
        borderColor: '#F8F8F8',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('ru-RU', { 
                style: 'currency', 
                currency: 'RUB',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              }).format(context.parsed.y);
            }
            return label;
          }
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#F8F8F8',
        },
        ticks: {
          color: '#D2D1D1',
          font: {
            family: "'Proxima Nova', sans-serif",
            size: 14,
            weight: 600,
          },
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <ChartContainer className={className}>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default SalesChart; 