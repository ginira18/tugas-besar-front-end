
import React from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer';

interface LayoutProps {
  children: React.ReactNode; 
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <ResponsiveDrawer />
      {children}
    </div>
  );
};

export default Layout;
