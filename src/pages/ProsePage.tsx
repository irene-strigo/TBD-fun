import React from 'react';
import { Header, Footer } from '../components';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import { ListLink, PageUpLink, PanImg } from '../components/CommonStyles';
import { ShortStories } from '../components/Texts/TextShortStories';

const ProsePage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <PanImg src="/assets/images/jpgs/pan.jpg" alt="old pan"></PanImg>
      </ContentWrapper>
      <ContentWrapper id="List">
        <ListLink href="#Dacha">Дача. Сковородка.</ListLink>
        <ListLink href="#Stories">Тбд-рассказики.</ListLink>
      </ContentWrapper>
      {ShortStories.map((story) => {
        return (
          <ContentWrapper id={story.id}>
            <h2>{story.heading}</h2>
            <div>{story.text}</div>
          </ContentWrapper>
        );
      })}
      <PageUpLink href="#List">&#11014;</PageUpLink>
      <Footer />
    </PageWrapper>
  );
};

export default ProsePage;
