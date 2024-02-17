import { Box, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// ----------------------------------------------------------------------

export default function SpaceUsed({ totalSpace, usedSpace, ...other }) {
  const [series] = useState([calculateSpacePercentage(usedSpace, totalSpace)]);

  const options = {
    chart: {
      type: 'radialBar',
    },

    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 3,
          size: '45%',
        },
        track: {
          background: '#e7e7e7',
          startAngle: -90,
          endAngle: 90,
          strokeWidth: '67%',
          margin: 2,
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2,
          },
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: '18px',
            fontWeight: 700,
          },
        },
      },
    },

    grid: {
      padding: {
        top: 0,
      },
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        gradientToColors: ['#0092B7'],
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Average Results'],
  };

  // Function to calculate the percentage of used space
  function calculateSpacePercentage(used, total) {
    return (used / total) * 100;
  }

  return (
    <Card sx={{ boxShadow: '0 1.6rem 3rem #0000001a' }}>
      <Box sx={{ minHeight: 184, px: 3, py: 4 }}>
        <ReactApexChart series={series} options={options} type="radialBar" />
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
          Used of {usedSpace}GB / {totalSpace} GB
        </Typography>
      </Box>
    </Card>
  );
}

SpaceUsed.propTypes = {
  totalSpace: PropTypes.number,
  usedSpace: PropTypes.number,
};
