import { Box, Card, FormControl, MenuItem, Select, Typography } from '@mui/material';

export default function OverviewHeader() {
  return (
    <Box sx={{ marginBottom: '20px', boxShadow: '0 1.6rem 3rem #0000001a' }}>
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px 20px',
          height: '65px',
        }}
      >
        <Typography variant="h5" sx={{ color: '#1877F2' }}>
          Overview
        </Typography>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            defaultValue="Last 7 Days"
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ height: '45px', fontSize: '14px' }}
          >
            <MenuItem value="Last 7 Days" selected>
              Last 7 Days
            </MenuItem>
            <MenuItem value="Last 28 Days">Last 28 Days</MenuItem>
            <MenuItem value="Last 90 Days">Last 90 Days</MenuItem>
            <MenuItem value="Current Month">Current Month</MenuItem>
            <MenuItem value="Previous Month">Previous Month</MenuItem>
          </Select>
          {/* <FormHelperText>Without label</FormHelperText> */}
        </FormControl>
      </Card>
    </Box>
  );
}
