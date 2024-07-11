import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage, AboutUsPage } from './pages';
import PoetryPage from './pages/PoetryPage';
import ChatPage from './pages/ChatPage';
import ProsePage from './pages/ProsePage';

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
    path: '/poetry',
    element: <PoetryPage />,
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
