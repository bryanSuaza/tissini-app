import React from 'react';
import { Routes, Route } from "react-router-dom";
import Carrito from '../components/home/Carrito';
import MainHome from '../components/home/MainHome';
import NavbarComponent from '../components/ui/NavbarComponent';

const DashboardRoutes = () => {
  return (
    <>
      
      <NavbarComponent />
      
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="home" element={<MainHome />} />
        <Route path="carrito" element={<Carrito />} />
      </Routes>
    </>
  );
}

export default DashboardRoutes
