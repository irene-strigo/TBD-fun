import React from 'react';
import { Header, Footer } from '../components';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import { FlyingBastards, ListLink, LyricsBlock, PageUpLink } from '../components/CommonStyles';
import { Ballades } from '../components/TextBallades';
const BalladesPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper id="List">
        <ContentWrapper>
          {Ballades.map((ballade) => {
            return <ListLink href={`#${ballade.id}`}>{ballade.heading}</ListLink>;
          })}
        </ContentWrapper>
      </ContentWrapper>
      <ContentWrapper>
        {' '}
        <FlyingBastards src="/assets/images/jpgs/FlyingBastards.jpg"></FlyingBastards>
      </ContentWrapper>

      {Ballades.map((ballade) => {
        return (
          <ContentWrapper id={ballade.id}>
            <h2>{ballade.heading}</h2>
            <LyricsBlock>{ballade.text}</LyricsBlock>
          </ContentWrapper>
        );
      })}
      <PageUpLink href="#List">&#11014;</PageUpLink>
      <Footer />
    </PageWrapper>
  );
};

export default BalladesPage;
