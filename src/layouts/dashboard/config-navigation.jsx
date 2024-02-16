import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Website',
    icon:icon('website'),
    submenu: [
      {
        title: 'Overview',
        path: '/',
        icon: icon('home'),
      },
      {
        title: 'Reports',
        path: '/reports',
        icon: icon('reports'),
      },
      {
        title: 'Settings',
        path: '/settings',
        icon: icon('setting'),
      },
      {
        title: 'Team (Delegate)',
        path: '/delegate-team',
        icon: icon('team'),
      },
      {
        title: 'Billing',
        path: '/billing',
        icon: icon('invoice'),
      },
      {
        title: 'Action',
        path: '/action',
        icon: icon('action'),
      },
      {
        title: 'Tutorial (Videos)',
        path: '/tutorial',
        icon: icon('tutorial'),
      },
      {
        title: 'Help',
        path: '/help',
        icon: icon('help'),
      },
    ],
  },
];

export default navConfig;
