import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main className={`pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;