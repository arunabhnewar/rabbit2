import { Box, Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function UpgradePlan({ title }) {
  return (
    <Card
      sx={{
        px: 2,
        py: 4,
        borderRadius: 2,
        minHeight: 300,
        background: '#DDF9EA',
      }}
    >
      <Box
        sx={{
          display: 'block',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          textAlign: 'center',
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <Box
            component="img"
            sx={{
              height: 120,
            }}
            src="/assets/icons/glass/upgradebg.png"
          />
          <Box
            component="img"
            sx={{
              height: 150,
              position: 'absolute',
              right: '73px',
            }}
            src="/assets/icons/glass/character_2.png"
          />
        </Box>
        <Stack sx={{ display: 'block', justifyContent: 'flex-start', pt: 4 }}>
          <Button
            type="submit"
            sx={{
              backgroundColor: '#212b36',
              borderRadius: '5px',
              color: '#fff',
              width: '150px',
              py: 1,
              '&:hover': {
                backgroundColor: '#454f5b',
              },
            }}
          >
            Upgrade Plan
          </Button>
        </Stack>
        <Box sx={{ marginTop: '15px' }}>
          <Typography
            variant="p"
            sx={{
              fontWeight: 400,
              lineHeight: 1.5,
              fontSize: '12px',
              color: '#007867',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
UpgradePlan.propTypes = {
  title: PropTypes.string,
};
