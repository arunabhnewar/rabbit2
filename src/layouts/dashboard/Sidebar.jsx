/* eslint-disable react/prop-types */
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';
import { usePathname } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

// import { account } from 'src/_mock/account';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import navConfig from './config-navigation';
import userConfig from './user-config';

// ----------------------------------------------------------------------

export default function Sidebar({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderUser = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {userConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
        // bgcolor: (theme) => theme.palette.paper,
        backgroundColor: '#f8f9fa',
        overflowY: 'auto',
      }}
    >
      <Box
        sx={{
          height: '100%',
          bgcolor: (theme) => theme.palette.grey[900],
          paddingBottom: 5,
        }}
      >
        <Logo sx={{ mt: 3, ml: 4 }} />

        {renderMenu}
      </Box>

      <Box sx={{ flexGrow: 1, backgroundColor: '#f8f9fa' }}>
        <Box
          sx={{
            height: '100%',
            bgcolor: (theme) => theme.palette.grey[900],
            padding: '80px 0 10px 0',
          }}
        >
          {renderUser}
        </Box>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          <Box sx={{ height: 1 }}>{renderContent}</Box>
        </Drawer>
      )}
    </Box>
  );
}

Sidebar.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const active = item.path === pathname;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {item.submenu ? (
        <>
          <ListItem
            button
            onClick={handleClick}
            sx={{
              minHeight: 44,
              borderRadius: 0.75,
              typography: 'body2',
              color: 'primary.contrastText',
              textTransform: 'capitalize',
              fontWeight: 'fontWeightMedium',
              ...(active && {
                color: 'primary.contrastText',
                fontWeight: 'fontWeightSemiBold',
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                '&:hover': {
                  bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                },
              }),
            }}
          >
            <Box
              component="span"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  component="span"
                  sx={{ width: 24, height: 24, mr: 2, color: 'primary.contrastText' }}
                >
                  {item.icon}
                </Box>
                <Box component="span">{item.title}</Box>
              </Box>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              )}
            </Box>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.submenu.map((subItem) => (
                <NavItem key={subItem.title} item={subItem} />
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItemButton
          component={RouterLink}
          href={item.path}
          sx={{
            minHeight: 44,
            borderRadius: 0.75,
            typography: 'body2',
            color: 'primary.contrastText',
            textTransform: 'capitalize',
            fontWeight: 'fontWeightMedium',
            ...(active && {
              color: 'primary.contrastText',
              fontWeight: 'fontWeightSemiBold',
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
              '&:hover': {
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
              },
            }),
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                {item.icon}
              </Box>
              <Box component="span">{item.title}</Box>
            </Box>
            {/* No arrow for leaf nodes */}
          </Box>
        </ListItemButton>
      )}
    </>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
