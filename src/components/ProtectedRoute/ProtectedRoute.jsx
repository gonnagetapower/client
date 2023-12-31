import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  let auth = { token: localStorage.getItem('token') };
  return auth.token ? <Outlet /> : <Navigate to="/auth" />;
};

export default ProtectedRoute;
