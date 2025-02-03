
 

import './App.css'
// import { Route, Routes } from 'react-router'
// import Dashboard from './pages/Dashboard/Dashboard'
// import MainLayout from './pages/Layout/Layout'
import type { Navigation } from '@toolpad/core';
import { Outlet } from 'react-router';
import { ReactRouterAppProvider } from '@toolpad/core/react-router';
import DashboardIcon from '@mui/icons-material/Dashboard';
 
import ApartmentIcon from '@mui/icons-material/Apartment';


const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'companies',
    title: 'Companies',
    icon: <ApartmentIcon />,

  },
];



const BRANDING = {
  title: 'Affotax Formations Client Portal',
};





function App() {
  
  return (
    <>
     



<ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>



    </>
  )
}

export default App






//       {/* <Routes>
//   {/* <Route index element={<Home />} /> */}
//   <Route element={<MainLayout />}>
//   <Route path="/" element={<Dashboard />} />
//   </Route>

//   {/* <Route element={<AuthLayout />}>
//     <Route path="login" element={<Login />} />
//     <Route path="register" element={<Register />} />
//   </Route>

//   <Route path="concerts">
//     <Route index element={<ConcertsHome />} />
//     <Route path=":city" element={<City />} />
//     <Route path="trending" element={<Trending />} />
//   </Route> */}
// </Routes> */}