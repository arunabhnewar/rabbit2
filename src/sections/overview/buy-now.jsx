import { Box, Button, Card, Typography } from '@mui/material';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------

export default function BuyNow({ title }) {
  // Slice the title if its length exceeds 6 characters
  const displayTitle = title.length > 22 ? title.slice(0, 22) : title;

  return (
    <Card
      sx={{
        borderRadius: '16px',
        width: '100%',
        minHeight: 415,
        backgroundImage: `url('/assets/images/product_1.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover',
        position: 'relative',
        '&:before': {
          content: '""',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          zIndex: -1,
          position: 'absolute',
          background: 'linear-gradient(rgba(22, 28, 36, 0) 0%, rgb(22, 28, 36) 75%)',
          
        },
      }}
    >
      <Box
        sx={{
          px: 3,
          py: 4,
          position:"absolute",
          bottom:"0"
        }}
      >
        <Typography variant="subtitle1" sx={{ color: (theme) => theme.palette.grey[400], pb: 2 }}>
          NEW
        </Typography>

        <Typography variant="h5" sx={{ color: '#fff', pb: 2 }}>
          {displayTitle} ...
        </Typography>

        <Button sx={{ backgroundColor: '#00A76F', color: '#fff', p: 1, cursor: 'pointer' }}>
          Buy Now
        </Button>
      </Box>
    </Card>
  );
}

BuyNow.propTypes = {
  title: PropTypes.string,
};
