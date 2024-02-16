/* eslint-disable react/no-unknown-property */
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { SvgIcon, Typography } from '@mui/material';
import { useState } from 'react';
// import OverviewHeader from 'src/components/OverviewHeader/OverviewHeader';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import EnhancedTable from '../url-list';

// ----------------------------------------------------------------------

export default function AppView() {
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setHovered3(false);
  };
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, <span style={{ fontSize: '20px', fontWeight: 500 }}>User Name</span> 👋
      </Typography>

      {/* <OverviewHeader /> */}

      <Grid container spacing={2}>
        {/* Speed Score */}
        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Speed Score"
            subheader="Best score based on page speed insight"
          />
        </Grid>

        {/* Graph */}
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

        {/* Css Optimization */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            style={{ transition: '0.3s', background: hovered ? '#dad7f4' : '#f0effb' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            title="CSS OPTIMIZATION"
            total="90%"
            color="success"
            url="/css-optimization"
            icon={
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
                style={{
                  color: hovered ? '#fff' : '#4D69FA',
                  transition: '0.3s',
                  background: hovered ? '#4D69FA' : '#dfdcff',
                  width: '50px',
                  height: '50px',
                  padding: '10px',
                  borderRadius: '50%',
                }}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4m-10 4a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" />
                </g>
              </SvgIcon>
            }
          />
        </Grid>

        {/* Delegate Access */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            style={{ transition: '0.3s', background: hovered2 ? '#dad7f4' : '#f0effb' }}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            title="DELEGATE ACCESS"
            total="8"
            color="info"
            url="/delegate-access"
            icon={
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
                style={{
                  color: hovered2 ? '#fff' : '#4D69FA',
                  transition: '0.3s',
                  background: hovered2 ? '#4D69FA' : '#dfdcff',
                  width: '50px',
                  height: '50px',
                  padding: '10px',
                  borderRadius: '50%',
                }}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  transform="matrix(0.7000000000000005,0,0,0.7000000000000005,3.5999999999999908,3.5999999999999908)"
                >
                  <path d="M21 14c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3Zm-4-1h2c.551 0 1 .449 1 1h-4c0-.551.449-1 1-1Zm6 8c0 1.103-.897 2-2 2h-6c-1.103 0-2-.897-2-2v-2h4.5v1.5a.5.5 0 0 0 1 0V19H23v2Zm0-3H13v-1c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v1ZM9 12c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6ZM9 1c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5Zm1.995 13.66a.495.495 0 0 1-.566.424A8.274 8.274 0 0 0 9.25 15C4.701 15 1 18.701 1 23.25v.25a.5.5 0 0 1-1 0v-.25C0 18.149 4.149 14 9.25 14c.442 0 .887.032 1.321.094.273.04.463.293.424.566Z" />
                </g>
              </SvgIcon>
            }
          />
        </Grid>

        {/* Page Roles */}
        <Grid xs={12} sm={6} md={4}>
          <AppWidgetSummary
            style={{ transition: '0.3s', background: hovered3 ? '#dad7f4' : '#f0effb' }}
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            title="PAGE ROLES(S)"
            total="0"
            color="warning"
            url="/page-rules"
            icon={
              <SvgIcon
                xmlns="http://www.w3.org/2000/svg"
                width="4em"
                height="4em"
                viewBox="0 0 24 24"
                style={{
                  color: hovered3 ? '#fff' : '#4D69FA',
                  transition: '0.3s',
                  background: hovered3 ? '#4D69FA' : '#dfdcff',
                  width: '50px',
                  height: '50px',
                  padding: '10px',
                  borderRadius: '50%',
                }}
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  transform="matrix(0.7600000000000003,0,0,0.7600000000000003,2.8799999999999955,2.8799999999999955)"
                >
                  <path d="M19.5 1h-15C2.02 1 0 3.02 0 5.5v13C0 20.98 2.02 23 4.5 23h15c2.48 0 4.5-2.02 4.5-4.5v-13C24 3.02 21.98 1 19.5 1Zm-15 1h15C21.43 2 23 3.57 23 5.5V8H1V5.5C1 3.57 2.57 2 4.5 2Zm15 20h-15C2.57 22 1 20.43 1 18.5V9h22v9.5c0 1.93-1.57 3.5-3.5 3.5ZM19 5c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm-3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm-3 0c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Z" />
                </g>
              </SvgIcon>
            }
          />
        </Grid>

        {/* Canonical URLs Detected Table */}
        <Grid xs={12} md={12} lg={12} sx={{ mt: 2 }}>
          <EnhancedTable />
        </Grid>
      </Grid>
    </Container>
  );
}
