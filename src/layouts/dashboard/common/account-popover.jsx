/* eslint-disable react/no-unknown-property */
import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { SvgIcon } from '@mui/material';
import { account } from 'src/_mock/account';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Add New Website',
    icon: (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
      </SvgIcon>
    ),
    to: '/add-new-website',
  },
  {
    label: 'My Profile',
    icon: (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58z" />
      </SvgIcon>
    ),
    to: '/my-profile',
  },
  {
    label: 'Partner',
    icon: (
      <SvgIcon
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M16.48 10.41c-.39.39-1.04.39-1.43 0l-4.47-4.46-7.05 7.04-.66-.63c-1.17-1.17-1.17-3.07 0-4.24l4.24-4.24c1.17-1.17 3.07-1.17 4.24 0L16.48 9c.39.39.39 1.02 0 1.41m.7-2.12c.78.78.78 2.05 0 2.83-1.27 1.27-2.61.22-2.83 0l-3.76-3.76-5.57 5.57c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.42 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.62-4.62.71.71-4.62 4.62c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l8.32-8.34c1.17-1.17 1.17-3.07 0-4.24l-4.24-4.24c-1.15-1.15-3.01-1.17-4.18-.06z" />
      </SvgIcon>
    ),
    to: '/partner',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          src={account.photoURL}
          alt={account.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        >
          {account.displayName.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 200,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        {MENU_OPTIONS.map((option) => (
          <Link
            key={option.label}
            to={option.to}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <MenuItem
              onClick={handleClose}
              sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
            >
              <Typography sx={{ fontSize: '20px', paddingTop: '7px' }}>{option.icon}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', paddingLeft: '5px' }}>
                {' '}
                {option.label}
              </Typography>
            </MenuItem>
          </Link>
        ))}

        <Divider sx={{ borderStyle: 'dashed', m: 0 }} />

        <MenuItem
          disableRipple
          disableTouchRipple
          onClick={handleClose}
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
        >
          <Typography sx={{  paddingTop: '7px' }}>
        
            <SvgIcon
             xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
            >
              <path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"/>
            </SvgIcon>
          </Typography>
          <Typography variant="body2" sx={{ color: 'error.main', paddingLeft: '5px' }}>
            Logout
          </Typography>
        </MenuItem>
      </Popover>
    </>
  );
}
