import { Box, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function WeeklySales({ total, label }) {
  return (
    <Card
      sx={{
        px: 2,
        py: 4,
        borderRadius: 2,
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:
          'linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)',
      }}
    >
      <Box
        component="img"
        sx={{
          height: 84,
          width: 84,
          maxHeight: { xs: 64, md: 64 },
          maxWidth: { xs: 64, md: 64 },
        }}
        src="/assets/icons/glass/ic_glass_bag.png"
      />
      <Typography variant="h2" sx={{ pt: 2, color: '#004b50', fontWeight: 800, lineHeight: 1.5 }}>
        {total}k
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ pt: 2, color: '#004b50', fontWeight: 600, lineHeight: 1.5 }}
      >
        {label}
      </Typography>
    </Card>
  );
}

WeeklySales.propTypes = {
  total: PropTypes.number,
  label: PropTypes.string,
};
