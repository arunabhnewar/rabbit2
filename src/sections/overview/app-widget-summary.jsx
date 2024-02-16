import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({
  title,
  total,
  icon,
  url,
  color = 'primary',
  sx,
  ...other
}) {
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <Card
        component={Stack}
        spacing={3}
        direction="row"
        sx={{
          px: 3,
          py: 5,
          borderRadius: 2,
          boxShadow: '0 1.6rem 3rem #0000001a',
          ...sx,
        }}
        {...other}
      >
        {icon && <Box sx={{ width: 64, height: 64 }}>{icon}</Box>}

        <Stack spacing={0.5}>
          <Typography variant="h4">{total}</Typography>

          <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
            {title}
          </Typography>
        </Stack>
      </Card>
    </Link>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
  url: PropTypes.string,
};
