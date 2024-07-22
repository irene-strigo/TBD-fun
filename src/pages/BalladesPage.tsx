import React, { useState } from 'react';
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
  const [animAction, setAnimAction] = useState(true);
  const handleClick = (action: boolean) => {
    return action === true ? setAnimAction(false) : setAnimAction(true);
  };

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const repeatAnimAction = () => {
    return setInterval(() => setAnimAction(true), getRandomInt(20000, 40000));
  };
  repeatAnimAction();
  return (
    <PageWrapper>
      <Header />
      <BalladesPageContainer>
        <FallingBastard
          src="/assets/images/pngs/Mudak.png"
          $animated={animAction}
          onClick={() => {
            handleClick(animAction);
          }}
        />

        <ContentWrapper id="List">
          <ContentWrapper>
            {Ballades.map((ballade) => {
              return (
                <ListLink key={ballade.id} href={`#${ballade.id}`}>
                  {ballade.heading}
                </ListLink>
              );
            })}
          </ContentWrapper>
        </ContentWrapper>
        <ContentWrapper>
          {' '}
          <FlyingBastards src="/assets/images/jpgs/FlyingBastards.jpg"></FlyingBastards>
        </ContentWrapper>

        {Ballades.map((ballade) => {
          return (
            <ContentWrapper key={ballade.id} id={ballade.id}>
              <h2>{ballade.heading}</h2>
              <LyricsBlock>{ballade.text}</LyricsBlock>
            </ContentWrapper>
          );
        })}
        <PageUpLink href="#List">&#9650;</PageUpLink>
      </BalladesPageContainer>
      <Footer />
    </PageWrapper>
  );
};

export default BalladesPage;
