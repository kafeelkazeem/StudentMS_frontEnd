import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Pie({paid, owing, notPaid}) {
  return (
    <PieChart
      colors={['#00897b', '#ffa726', '#e64a19']}
      series={[
        {
          data: [
            { id: 0, value: paid, label: 'Paid' },
            { id: 1, value: owing, label: 'Owing' },
            { id: 2, value: notPaid, label: 'Not Paid' },
          ],
        },
      ]}
      width={450}
      height={250}
    />
  );
}