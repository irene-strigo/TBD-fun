import React from 'react';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ChatPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>ChatPage</ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default ChatPage;
