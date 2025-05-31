// src/layouts/MainLayout.tsx
import React from 'react';
import Header from '../components/layout/Header'; // We'll create this next
import Footer from '../components/layout/Footer'; // We'll create this next

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50"> {/* Added a default light bg */}
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Added some basic content padding */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;