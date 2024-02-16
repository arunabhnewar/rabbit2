import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------
const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const userConfig = [
  {
    title: 'User',
    icon: icon('user'),
    // submenu: [
    //   {
    //     title: 'Profile',
    //     path: '/profile',
    //     icon: icon('profile'),
    //   },
    //   {
    //     title: 'Add New Website',
    //     path: '/add-new-website',
    //   },
    //   {
    //     title: 'Partner',
    //     path: '/partner',
    //   },
    // ],
  },
];

export default userConfig;
