// src/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
