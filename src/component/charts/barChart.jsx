import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Chart({data, classes}) {
  console.log(data) 
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', 
    colorMap: {
      type: 'piecewise',
      thresholds: [1],
      colors: ['#1976d2', 'red', 'blue'],
    },  
    categoryGapRatio: 0.5, barGapRatio: 0,  data: classes }]}
    series={[{ data: data}]}
      height={400}
    />
  );
}
