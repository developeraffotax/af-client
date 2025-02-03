// import React from 'react';


// interface MainLayoutProps {
//     children?: React.ReactNode;
//   }

// const MainLayout: React.FC<MainLayoutProps> = ({ children  }) => {
//  return (
//  <div className='w-full '>
//  <header className='w-full h-16 bg-orange-300 '>
//  {/* Header content goes here */}
//  HEADER
//  </header>
//  <main>
//  {children}
//  </main>
//  <footer>
//  {/* Footer content goes here */}
//  </footer>
//  </div>
//  );
// };
// export default MainLayout;

 
import { Outlet } from 'react-router';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

export default function Layout() {
  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}