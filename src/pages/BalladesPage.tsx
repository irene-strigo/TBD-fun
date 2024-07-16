import React from 'react';
import { Header, Footer } from '../components';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import {
  BalladesPageContainer,
  FlyingBastards,
  ListLink,
  LyricsBlock,
  PageUpLink,
} from '../components/CommonStyles';
import { Ballades } from '../components/Texts/TextBallades';
import { FallingBastard } from '../components/AnimatedComponents';

const BalladesPage = () => {
  let RRh = 0; // Храним предыдущее значение
  function randomAction(a: number, b: number): number {
    const c = Math.floor(Math.random() * (b - a + 1)) + a; // Получаем рандомное число
    return c !== RRh ? (RRh = c) : randomAction(a, b);
  }
  randomAction(1, 20);

  return (
    <PageWrapper>
      <Header />
      <BalladesPageContainer>
        <FallingBastard src="/assets/images/pngs/Mudak.png" $animated />
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
      </BalladesPageContainer>
      <Footer />
    </PageWrapper>
  );
};

export default BalladesPage;
