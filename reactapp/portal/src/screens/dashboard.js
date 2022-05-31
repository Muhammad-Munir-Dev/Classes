import * as React from 'react';
import ResponsiveDrawer from '../components/drawer';
import Header from '../components/header';
import {Outlet} from "react-router-dom";

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <ResponsiveDrawer />
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;