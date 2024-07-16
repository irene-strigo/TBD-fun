import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FAIcon } from '../components/AnimatedComponents';
const AboutUsPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <div>
          About Us Page Work in progress... <FAIcon icon={faCog} color="#a8324a" $animated />
        </div>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default AboutUsPage;
