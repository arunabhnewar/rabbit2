import PropTypes from 'prop-types';
import { useState } from 'react';

import Box from '@mui/material/Box';

import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(true);

  return (
    <Box
      sx={{
        minHeight: 1,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
      }}
    >
      <Header onOpenNav={() => setOpenNav(true)} />

      <Sidebar
        openNav={openNav}
        onCloseNav={() => setOpenNav(false)}
        onOpenNav={() => setOpenNav(true)}
      />

      <Main>{children}</Main>
    </Box>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
