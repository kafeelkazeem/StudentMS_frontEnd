import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Chart({data}) {
  console.log(data) 
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', 
    colorMap: {
      type: 'piecewise',
      thresholds: [1],
      colors: ['#1976d2', 'red', 'blue'],
    },  
    categoryGapRatio: 0.5, barGapRatio: 0,  data: ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5'] }]}
    series={[{ data: data}]}
      height={400}
    />
  );
}
