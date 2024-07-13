import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage, AboutUsPage } from './pages';
import ChatPage from './pages/ChatPage';
import ProsePage from './pages/ProsePage';
import BalladesPage from './pages/BalladesPage';

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
    path: '/ballades',
    element: <BalladesPage />,
  },
  {
    path: '/prose',
    element: <ProsePage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
]);
