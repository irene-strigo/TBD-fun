import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { AnimationWrapper, ContentWrapper, PageWrapper } from './PagesStyles';
import {
  BalladesPageContainer,
  FlyingBastards,
  ListLink,
  LyricsBlock,
  PageUpLink,
} from '../components/CommonStyles';
import { Ballades } from '../components/Texts/TextBallades';
import { FallingBastard, FastBastard } from '../components/AnimatedComponents';
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const BalladesPage = () => {
  const [animAction, setAnimAction] = useState(true);
  const handleClick = (action: boolean) => {
    return action === true ? setAnimAction(false) : setAnimAction(true);
  };

  const repeatAnimAction = () => {
    return setInterval(() => setAnimAction(true), getRandomInt(20000, 50000));
  };
  repeatAnimAction();
  return (
    <PageWrapper>
      <Header />
      <BalladesPageContainer>
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
        </ContentWrapper>{' '}
        <FlyingBastards src="/assets/images/pngs/FlyingBastards2.png"></FlyingBastards>
        <FallingBastard
          src="/assets/images/pngs/FlyingOne.png"
          $animated={animAction}
          onClick={() => {
            handleClick(animAction);
          }}
        />
        {Ballades.map((ballade) => {
          return (
            <ContentWrapper key={ballade.id} id={ballade.id}>
              <AnimationWrapper>
                <FastBastard
                  $animated={animAction}
                  src="/assets/images/pngs/FastBastard.png"
                  onClick={() => {
                    handleClick(animAction);
                  }}
                  alt="fast bastard"
                ></FastBastard>
              </AnimationWrapper>
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
