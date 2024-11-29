import React from 'react';
import { Header, Footer } from '../components';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import { ListLink, LyricsBlock, PageUpLink } from '../components/CommonStyles';

import { NewBloodPoetry } from '../components/Texts/TextNewBlood';

const PoetryPage = () => {
  return (
    <PageWrapper>
      <Header />

      <ContentWrapper id="List">
        <ListLink href="#Dinner">Несвоевременный обед</ListLink>
        <ListLink href="#Rythms">Стишки</ListLink>
      </ContentWrapper>
      {NewBloodPoetry.map((item) => {
        return (
          <ContentWrapper key={item.id} id={item.id}>
            <h2>{item.heading}</h2>
            <LyricsBlock>{item.text}</LyricsBlock>
          </ContentWrapper>
        );
      })}
      <PageUpLink href="#List">&#9650;</PageUpLink>
      <Footer />
    </PageWrapper>
  );
};

export default PoetryPage;
