import React from 'react';
import { Bar } from 'react-chartjs-2';

const RangeDistributionChart = ({ data }) => {
  const rangeCounts = data.reduce((acc, vehicle) => {
    const rangeGroup = Math.floor(vehicle["Electric Range"] / 50) * 50;
    acc[rangeGroup] = (acc[rangeGroup] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(rangeCounts).map(range => `${range}-${Number(range) + 49} miles`),
    datasets: [
      {
        label: 'Electric Range Distribution',
        data: Object.values(rangeCounts),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default RangeDistributionChart;