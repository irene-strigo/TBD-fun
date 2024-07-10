import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage, AboutUsPage } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },

  {
    path: '/main',
    element: <MainPage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
]);
