import React from 'react';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { ChatPointer, ChatPointerContainer } from '../components/CommonStyles';

const ChatPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <ChatPointerContainer>
          <img src="/assets/images/pngs/Mudachok5.png"></img>
          <ChatPointer href="https://t.me/+3tT5NbLoUtliZmQ6">вот здесь</ChatPointer>
        </ChatPointerContainer>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default ChatPage;
