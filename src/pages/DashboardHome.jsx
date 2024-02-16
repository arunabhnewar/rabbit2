import { Helmet } from 'react-helmet-async';
import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function DashboardHome() {
  return (
    <>
      <Helmet>
        <title> Dashboard | RABBIT </title>
      </Helmet>

      <AppView />
    </>
  );
}
