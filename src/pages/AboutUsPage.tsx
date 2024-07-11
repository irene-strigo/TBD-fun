import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContentWrapper, PageWrapper } from './PagesStyles';

const AboutUsPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>AboutUsPage</ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default AboutUsPage;
