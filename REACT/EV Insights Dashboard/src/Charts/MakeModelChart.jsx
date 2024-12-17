import React from 'react';
import { Bar } from 'react-chartjs-2';

const MakeModelChart = ({ data }) => {
  const makeCounts = data.reduce((acc, vehicle) => {
    acc[vehicle.Make] = (acc[vehicle.Make] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(makeCounts),
    datasets: [
      {
        label: 'Popular EV Makes',
        data: Object.values(makeCounts),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default MakeModelChart;