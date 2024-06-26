import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { blue } from '@mui/material/colors';

export default function Chart() { 
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', 
    colorMap: {
      type: 'piecewise',
      thresholds: [1],
      colors: ['#1976d2', 'red', 'blue'],
    },  
    categoryGapRatio: 0.5, barGapRatio: 0,  data: ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5'] }]}
    series={[{ data: [4, 3, 5, 7, 10]}]}
      height={400}
    />
  );
}
