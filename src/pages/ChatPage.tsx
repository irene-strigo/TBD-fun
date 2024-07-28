import React from 'react';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FAIcon } from '../components/AnimatedComponents';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import { channel, client } from '../services/ChatClient';

const ChatPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <div>
          <div>{client.user?.id}</div>
          <div>{channel.id}</div>
          Chat Page Work in progress... <FAIcon icon={faCog} color="#a8324a" $animated />
        </div>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default ChatPage;
