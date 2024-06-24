import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Chart() { 
  return (
    <BarChart
    xAxis={[{ scaleType: 'band',  categoryGapRatio: 0.5, barGapRatio: 0,  data: ['Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5'] }]}
    series={[{ data: [4, 3, 5, 7, 10]}]}
      height={400}
    />
  );
}
