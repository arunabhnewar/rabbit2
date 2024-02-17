import { Paper, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

const BorderLinearProgressBlue = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  marginTop: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#C2EEF6' : '#308fe8',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#00B8D9' : '#308fe8',
  },
}));

const BorderLinearProgressGreen = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  marginTop: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#DBF6E5' : '#308fe8',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#17B67A' : '#308fe8',
  },
}));

// ----------------------------------------------------------------------

export default function AppLoadingTime({ title, total, percent, color, ...other }) {
  return (
    <Paper sx={{ borderRadius: '16px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Typography variant="subtitle2">{title}</Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: 'text.disabled', display: 'flex', justifyContent: 'space-between' }}
          >
            {total.toLocaleString()}{' '}
            {percent && <Typography> ({`${percent || ''}${(percent && '%') || ''}`})</Typography>}
          </Typography>
        </Stack>
        {color === 'green' && <BorderLinearProgressGreen variant="determinate" value={percent} />}
        {color === 'blue' && <BorderLinearProgressBlue variant="determinate" value={percent} />}
      </Box>
    </Paper>
  );
}
AppLoadingTime.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  total: PropTypes.number,
  percent: PropTypes.number,
};
