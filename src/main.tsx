import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layout from './pages/Layout/Layout.tsx'
 
import { createBrowserRouter, RouterProvider } from 'react-router';
import DashboardPage from './pages/Dashboard/Dashboard.tsx'
import Companies from './pages/Companies/Companies.tsx'

const router = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '',
            Component: DashboardPage,
          },
          {
            path: 'companies',
            Component: Companies,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
