/* eslint-disable func-names */
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// ----------------------------------------------------------------------

export default function AppSpeedScores({ title, subheader, ...other }) {
  const [series] = useState([75, 44]);
  const [options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: '65%',
        },
        dataLabels: {
          name: {
            show: true,
          },

          value: {
            show: true,
            fontSize: '18px',
            fontWeight: 600,
            formatter(val) {
              return `${val}%`;
            },
          },
          total: {
            show: true,
            label: 'Total',
            color: '#637381',
            fontSize: '12px',
            fontWeight: 600,
            formatter(w) {
              return `2234`;
            },
          },
        },
      },
    },
    fill: {
      type: 'solid',
      colors: ['#00CC66', '#FFAA33'],
    },

    stroke: {
      lineCap: 'round',
    },
    labels: ['After', 'Before'],
    colors: ['#00CC66', '#FFAA33'],
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

AppSpeedScores.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string,
};
