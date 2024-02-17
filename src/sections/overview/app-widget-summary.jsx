/* eslint-disable object-shorthand */
import PropTypes from 'prop-types';

import { Box, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { BarPlot, ChartContainer } from '@mui/x-charts';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, data, color, sx, ...other }) {
  return (
    <Card
      sx={{
        px: 2,
        py: 1,
        borderRadius: 2,
        boxShadow: '0 1.6rem 3rem #0000001a',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...sx,
      }}
      {...other}
    >
      <Box>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary', pt: 2 }}>
          {title}
        </Typography>
      </Box>

      <Box
        component={Stack}
        spacing={1}
        direction="row"
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Stack spacing={0.5}>
          <Typography variant="h4">{total.toLocaleString()}</Typography>
        </Stack>

        {data && (
          <Box sx={{ width: 150, height: 130 }}>
            <ChartContainer
              width={150}
              height={130}
              series={[{ data: data?.series, label: `${data?.labels}`, type: 'bar', color: color }]}
              xAxis={[{ scaleType: 'band', data: data?.labels }]}
            >
              <BarPlot />
            </ChartContainer>
          </Box>
        )}
      </Box>
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  data: PropTypes.object,
};
