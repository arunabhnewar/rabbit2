import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

export default function WelcomeBack({ userName }) {
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: '#DDF9EB',
        justifyContent: 'space-between',
        p: 3,
        flexWrap: 'wrap',
        marginBottom: '15px',
        minHeight: 280,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>
          <Typography
            component="div"
            variant="h4"
            sx={{ maxWidth: '230px', fontWeight: 600, color: '#004b50' }}
          >
            Welcome back 👋 {userName}
          </Typography>
          <Typography
            sx={{ maxWidth: '245px', fontSize: '13px', fontWeight: 400, pt: 2 }}
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt
            anything.
          </Typography>
          <Button
            sx={{
              background: '#00A76F',
              marginTop: '15px',
              '&:hover': {
                backgroundColor: '#2F6C6B',
              },
            }}
            variant="contained"
          >
            Go Now
          </Button>
        </CardContent>
      </Box>
      <Box
        component="img"
        sx={{
          maxWidth: 220,
          width: '100%',
        }}
        src="/assets/icons/glass/welcomeImg-svg.png"
      />
    </Card>
  );
}
WelcomeBack.propTypes = {
  userName: PropTypes.string,
};
