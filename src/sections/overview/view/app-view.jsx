/* eslint-disable react/no-unknown-property */
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import { useState } from 'react';
// import OverviewHeader from 'src/components/OverviewHeader/OverviewHeader';
import AppSpeedScores from '../app-speed-score';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import BuyNow from '../buy-now';
import FeatureBox from '../feature-box';
import InviteFriends from '../invite-friends';
import AppLoadingTime from '../loading-time-before-after';
import SpaceUsed from '../space-use';
import UpgradePlan from '../upgrade-plan';
import EnhancedTable from '../url-list';
import WeeklySales from '../weekly-sales';
import WelcomeBack from '../welcome-back';

// ----------------------------------------------------------------------

export default function AppView() {
  // Initial value for used space
  const [usedSpace, setUsedSpace] = useState(30.5);

  // Function to handle change in used space input
  const handleUsedSpaceChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setUsedSpace(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi <span style={{ fontSize: '20px', fontWeight: 500 }}>User Name </span> 👋
      </Typography>
      {/* welcome */}
      <Grid container spacing={2}>
        {/* welcome */}
        <Grid xs={12} md={8} lg={8}>
          <WelcomeBack userName="Jaydon Frankie" />
        </Grid>

        {/* feature app */}
        <Grid xs={12} md={4} lg={4}>
          <FeatureBox title="Exploring the Hidden Gems of Destination" />
        </Grid>

        {/* Speed Score */}
        <Grid xs={12} md={6} lg={4}>
          <AppSpeedScores title="Speed Score" subheader="Best score based on page speed insight" />
        </Grid>

        {/* Website visits */}
        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2023',
                '08/01/2023',
                '09/01/2023',
                '10/01/2023',
                '11/01/2023',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        {/* Pages Optimized */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Pages Optimized"
            total={18765}
            color="#14B479"
            data={{
              series: [5000, 3000, 2000, 2780, 1890, 2390, 3490, 700, 1200, 3800],
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            }}
          />
        </Grid>

        {/* 30 Days Page Views */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="30 Days Page Views"
            total={4876}
            color="#00B8D9"
            data={{
              series: [1000, 600, 1900, 3100, 2400, 1400, 3900, 800, 3200, 2600],
              labels: [
                'Day 1',
                'Day 2',
                'Day 3',
                'Day 4',
                'Day 5',
                'Day 6',
                'Day 7',
                'Day 8',
                'Day 9',
                'Day 10',
              ],
            }}
          />
        </Grid>

        {/* Team Member */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            title="Team Member"
            total={768}
            color="#FFBA23"
            data={{
              series: [80, 70, 110, 50, 140, 60, 95, 105, 125, 40],
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            }}
          />
        </Grid>

        {/* Progress bar */}
        <Grid xs={12} md={6} lg={8} sx={{ mt: 3 }}>
          <Grid xs={12} md={12} lg={12}>
            {/* Loading Time */}
            <Box
              sx={{
                width: '100%',
                boxShadow: '0 1.6rem 3rem #0000001a',
                p: 3,
                pb: 4,
                background: '#fff',
                borderRadius: '16px',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, pb: 3, color: '#637381' }}>
                Loading Time
              </Typography>
              <AppLoadingTime color="green" title="Before" total={22222} percent={50} />
              <br />
              <AppLoadingTime color="blue" title="After" total={11111} percent={25} />
            </Box>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {/* Css Size */}
                <Grid sx={{ mt: 3 }} item xs={7}>
                  <Item sx={{ boxShadow: '0 1.6rem 3rem #0000001a' }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Item>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, pb: 3, textAlign: 'left' }}
                          >
                            CSS Size
                          </Typography>
                          <Box sx={{ width: '100%' }}>
                            <AppLoadingTime
                              color="green"
                              title="Before"
                              total={22222}
                              percent={40}
                            />
                            <br />
                            <AppLoadingTime color="blue" title="After" total={51111} percent={75} />
                          </Box>
                        </Item>
                      </Grid>
                    </Grid>
                  </Item>
                </Grid>

                {/* Space Use */}
                <Grid sx={{ mt: 3 }} item xs={5}>
                  <SpaceUsed totalSpace={50} usedSpace={usedSpace} />
                  <input type="number" value={usedSpace} onChange={handleUsedSpaceChange} hidden />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {/* Buy Now  */}
        <Box sx={{ flexGrow: 1, mt: 4, ml: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <BuyNow title="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
            </Grid>
          </Grid>
        </Box>

        {/* Weekly sales */}
        <Grid xs={12} sm={6} md={4} sx={{ mt: 2 }}>
          <WeeklySales total={77} label="Weekly Sales" />
        </Grid>

        {/* Invite friends */}
        <Grid xs={12} sm={6} md={4} sx={{ mt: 2 }}>
          <InviteFriends amount={50} title="Invite friends and earn" />
        </Grid>

        {/* Upgrade plan */}
        <Grid xs={12} sm={6} md={4} sx={{ mt: 2 }}>
          <UpgradePlan title="Upgrade your plan and get more space" />
        </Grid>

        {/* Canonical URLs Detected Table */}
        <Grid xs={12} md={12} lg={12} sx={{ mt: 2 }}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </Container>
  );
}
