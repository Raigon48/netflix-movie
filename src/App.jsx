import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import AppRoutes from 'app/routes/AppRoutes';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
