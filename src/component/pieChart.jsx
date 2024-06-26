import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Pie() {
  return (
    <PieChart
      colors={['#00897b', '#ffa726', '#e64a19']}
      series={[
        {
          data: [
            { id: 0, value: 150, label: 'Paid' },
            { id: 1, value: 30, label: 'Owing' },
            { id: 2, value: 20, label: 'Not Paid' },
          ],
        },
      ]}
      width={450}
      height={250}
    />
  );
}