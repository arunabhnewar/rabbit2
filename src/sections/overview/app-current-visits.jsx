/* eslint-disable func-names */
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// ----------------------------------------------------------------------

export default function AppCurrentVisits({ title, subheader, chart, ...other }) {
  const [series] = useState([2324]);
  const [options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
    },
    series: [44, 75],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
            fontSize: '14px',
            formatter(val) {
              return `${val}`;
            },
          },
          total: {
            show: true,
            label: 'Total',
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#ffde88'],
    },

    stroke: {
      lineCap: 'round',
    },
    labels: ['Before', 'After'],
  });
  return (
    <Card {...other} sx={{ boxShadow: '0 1.6rem 3rem #0000001a' }}>
      <Box sx={{ minHeight: 424 }}>
        <CardHeader title={title} subheader={subheader} sx={{ mb: 2, textAlign: 'center' }} />
        <ReactApexChart options={options} series={series} type="radialBar" />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box sx={{ marginLeft: 2.5, marginRight: 2.5, textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              Pages
            </Typography>
            <Typography variant="h5">1004</Typography>
          </Box>
          <Box sx={{ marginLeft: 2.5, marginRight: 2.5, textAlign: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              Average Score
            </Typography>
            <Typography variant="h5">80</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

AppCurrentVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
