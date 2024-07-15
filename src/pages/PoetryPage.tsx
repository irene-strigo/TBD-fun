import React from 'react';
import { Header, Footer } from '../components';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import { ListLink, LyricsBlock, PageUpLink, PanImg } from '../components/CommonStyles';
import { Poetry } from '../components/Texts/TextPoetry';

const PoetryPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <PanImg src="/assets/images/pngs/Ment.png" alt="ment"></PanImg>
      </ContentWrapper>
      <ContentWrapper id="List">
        <ListLink href="#Ment">Мент</ListLink>
        <ListLink href="#Divanny">Д’Иванный цикл</ListLink>
        <ListLink href="#Aljonkin">Алёнкин дом</ListLink>
        <ListLink href="#Fonds">Старые тыбыдындские фонды</ListLink>
      </ContentWrapper>
      {Poetry.map((item) => {
        return (
          <ContentWrapper id={item.id}>
            <h2>{item.heading}</h2>
            <LyricsBlock>{item.text}</LyricsBlock>
          </ContentWrapper>
        );
      })}
      <PageUpLink href="#List">&#11014;</PageUpLink>
      <Footer />
    </PageWrapper>
  );
};

export default PoetryPage;
