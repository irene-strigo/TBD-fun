import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage, AboutUsPage } from './pages';
import ChatPage from './pages/ChatPage';
import ProsePage from './pages/ProsePage';
import BalladesPage from './pages/BalladesPage';
import PoetryPage from './pages/PoetryPage';
import LogInPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import GalleryPage from './pages/GalleryPage';

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
    path: '/poetry',
    element: <PoetryPage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },
  {
    path: '/about-us',
    element: <AboutUsPage />,
  },
  {
    path: '/log-in',
    element: <LogInPage />,
  },
  {
    path: '/registration',
    element: <RegistrationPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
]);
