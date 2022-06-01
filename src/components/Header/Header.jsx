import React from 'react';
import Navbar from './Navbar/Navbar';
import TopHeader from './TopHeader/TopHeader';

export default function Header() {
  return (
    <header>
      <TopHeader />
      <Navbar />
    </header>
  );
}
