import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CybertruckPage from './pages/CybertruckPage';
import ModelSPage from './pages/ModelSPage';
import ModelXPage from './pages/ModelXPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/cybertruck',
    element: <CybertruckPage />,
  },
  {
    path: '/model_s',
    element: <ModelSPage />,
  },
  {
    path: '/model_x',
    element: <ModelXPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
