/* eslint-disable react/no-unknown-property */
import { Box, Card, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function InviteFriends({ amount, title }) {
  return (
    <Card
      sx={{
        px: 2,
        py: 4,
        borderRadius: 2,
        minHeight: 300,
        background: 'linear-gradient(135deg, rgb(0, 167, 111), rgb(0, 120, 103))',
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              lineHeight: 1.5,
              color: (theme) => theme.palette.grey[0],
              width: '135px',
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {' '}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              lineHeight: 1.3,
              color: (theme) => theme.palette.grey[0],
              width: '97px',
            }}
          >
            ${amount}
          </Typography>
        </Box>
      </Box>

      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          pt: 4,
          position: 'relative',
        }}
      >
        <TextField
          type="email"
          name="email"
          id=""
          sx={{
            padding: '5px',
            borderRadius: '5px',
            backgroundColor: (theme) => theme.palette.grey[0],
            border: 0,
            mt: '40px',
          }}
          placeholder="Email"
        />
        <Button
          type="submit"
          sx={{
            backgroundColor: '#FFAB00',
            borderRadius: '5px',
            color: (theme) => theme.palette.grey[700],
            width: '60px',
            position: 'absolute',
            right: '12px',
            top: '87px',
            '&:hover': {
              backgroundColor: '#FFD740', // Change this to the desired hover color
            },
          }}
        >
          Invite
        </Button>
      </Stack>
    </Card>
  );
}

InviteFriends.propTypes = {
  amount: PropTypes.number,
  title: PropTypes.string,
};
