import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Website',
    icon: icon('website'),
    submenu: [
      {
        title: 'mymandap',
        icon: icon('weblink'),
        path: '/mymandap.in',
      },
      {
        title: 'google',
        icon: icon('weblink'),
        path: '/google.uk',
      },
    ],
  },
  {
    title: 'Overview',
    icon: icon('home'),
    path: '/',
  },
  {
    title: 'Reports',
    icon: icon('reports'),
    submenu: [
      {
        title: 'Pageviews Impression',
        icon: icon('pageviews'),
        path: '/page-views-impression',
      },
      {
        title: 'Css Optimization',
        icon: icon('cssOptimization'),
        path: '/css-optimization',
      },
    ],
  },
  {
    title: 'Settings',
    icon: icon('setting'),
    submenu: [
      {
        title: 'Cloudflare Integration',
        icon: icon('cloudflare'),
        path: '/cloudflare-integration',
      },
      {
        title: 'Page Rules',
        icon: icon('pageRules'),
        path: '/page-rules',
      },
    ],
  },
  {
    title: 'Team',
    icon: icon('team'),
    path: '/delegate-team',
  },
  {
    title: 'Billing',
    icon: icon('invoice'),
    path: '/billing',
  },
  {
    title: 'Action',
    icon: icon('action'),
    submenu: [
      {
        title: 'Delete Website',
        icon: icon('delete'),
        path: '/delete-website',
      },
    ],
  },
  {
    title: 'Tutorial',
    icon: icon('tutorial'),
    path: '/tutorial',
  },
  {
    title: 'Help',
    icon: icon('help'),
    submenu: [
      {
        title: 'Log Messages',
        icon: icon('logmessages'),
        path: '/log-messages',
      },
      {
        title: 'Dashboard Tour',
        icon: icon('dashboardTour'),
        path: '/dashboard-tour',
      },
      {
        title: 'Knowledge Base',
        icon: icon('knowledgebase'),
        path: '/knowledge-base',
      },
      {
        title: 'Contact Us',
        icon: icon('contactus'),
        path: '/contact-us',
      },
    ],
  },
];

export default navConfig;
