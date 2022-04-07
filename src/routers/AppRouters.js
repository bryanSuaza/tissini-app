import React from 'react'
import { 
          Route, 
          Routes,
          BrowserRouter
        } 
from "react-router-dom";
import LoginApp from '../components/login/LoginApp';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/autentication" element={
            <PublicRoute>
            <LoginApp title={"BIENVENIDO A TISSINI APP"} subtitle={"Digita tu numero de teléfono"}/>
            </PublicRoute>
          }/>
          

        <Route path="/*" element={
        <PrivateRoute>
            <DashboardRoutes />
        </PrivateRoute>
        }/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouters
