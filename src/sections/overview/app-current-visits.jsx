import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

// ----------------------------------------------------------------------

/* const CHART_HEIGHT = 400;

const LEGEND_HEIGHT = 72; */

/* const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
})); */

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
          total: {
            show: true,
            label: 'TOTAL',
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
    // plotOptions: {
    //   radialBar: {
    //     startAngle: 0,
    //     endAngle: 360,
    //     hollow: {
    //       margin: 0,
    //       size: '70%',
    //       background: '#fff',
    //       image: undefined,
    //       imageOffsetX: 0,
    //       imageOffsetY: 0,
    //       position: 'front',
    //       dropShadow: {
    //         enabled: true,
    //         top: 3,
    //         left: 0,
    //         blur: 4,
    //         opacity: 0.24,
    //       },
    //     },
    //     track: {
    //       background: '#fff',
    //       strokeWidth: '67%',
    //       margin: 0,
    //       dropShadow: {
    //         enabled: true,
    //         top: -3,
    //         left: 0,
    //         blur: 4,
    //         opacity: 0.35,
    //       },
    //     },
    //     dataLabels: {
    //       show: true,
    //       name: {
    //         offsetY: -10,
    //         show: true,
    //         color: '#888',
    //         fontSize: '17px',
    //       },
    //       value: {
    //         formatter(val) {
    //           return val;
    //         },
    //         color: '#111',
    //         fontSize: '36px',
    //         show: true,
    //       },
    //     },
    //   },
    // },

    // fill: {
    //   type: 'solid',
    //   colors: ['#ffde88'],
    // },

    // stroke: {
    //   lineCap: 'round',
    // },
    // labels: ['Out of 100'],
  });

  return (
    <Card {...other} sx={{ boxShadow: '0 1.6rem 3rem #0000001a', backgroundColor: '#fff3d4' }}>
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
