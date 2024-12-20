import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContentWrapper, PageWrapper } from './PagesStyles';
import { DiagonalBastard, SlideingBastard } from '../components/AnimatedComponents';
import Person from '../components/PersonComponent';
import { AboutUsPageContainer, AboutUsText } from '../components/CommonStyles';
import { getRandomInt } from './BalladesPage';
const AboutUsPage = () => {
  const [animAction, setAnimAction] = useState(true);

  const handleClick = (action: boolean) => {
    return action === true ? setAnimAction(false) : setAnimAction(true);
  };

  const repeatAnimAction = () => {
    return setInterval(() => setAnimAction(true), getRandomInt(20000, 40000));
  };
  repeatAnimAction();

  const Authors = [
    {
      id: 1,
      name: 'Ира',
      foto: '/assets/images/ai-portraits/IraNew.jpg',
      text: (
        <>
          Создательница множества текстов, любительница глубокомысленных глупостей и&nbsp;неуклюжей
          иронии.
          <br /> Очень увлекающаяся и&nbsp;совершенно не&nbsp;ленивая натура. Автор этого сайта.
        </>
      ),
    },
    {
      id: 2,
      name: 'Лена',
      foto: '/assets/images/ai-portraits/LenaNew.jpg',
      text: (
        <>
          Талантливая рисовальщица, придумавшая и&nbsp;воплотившая в&nbsp;жизнь все образы наших
          героев.
          <br /> Также участница всех совместных проектов, сохранившая тексты и&nbsp;картинки
          в&nbsp;цифровом формате.
        </>
      ),
    },
    {
      id: 3,
      name: 'Алёна',
      foto: '/assets/images/ai-portraits/AlyonkaNew.jpg',
      text: (
        <>
          Вдохновительница всех текстов и&nbsp;хранительница их&nbsp;бумажных первоисточников.
          <br /> Принимала участие в&nbsp;написании редко, но&nbsp;метко.
        </>
      ),
    },
  ];
  return (
    <PageWrapper>
      <Header />

      <ContentWrapper>
        <SlideingBastard
          $animated={animAction}
          src="/assets/images/pngs/Mudachok2.png"
          onClick={() => {
            handleClick(animAction);
          }}
        />
        <DiagonalBastard
          $animated={animAction}
          src="/assets/images/pngs/Mudachok3.png"
          onClick={() => {
            handleClick(animAction);
          }}
        />
      </ContentWrapper>

      <AboutUsPageContainer>
        <ContentWrapper>
          <AboutUsText>
            <p>
              Этот сайт предназначен для хранения творчества нескольких подростков, которые учились
              в&nbsp;школе в&nbsp;90-е годы. Большинство текстов написано вдвоём или втроём,
              в&nbsp;некоторых принимали участие и&nbsp;другие люди: дети или взрослые. Практически
              все персонажи полностью вымышленные, некоторые имели прототипы среди окружающих людей,
              но&nbsp;никто не&nbsp;является точным портретом. Все совпадения случайны.
            </p>
          </AboutUsText>
        </ContentWrapper>
        {Authors.map((author) => (
          <Person key={author.id} name={author.name} text={author.text} image={author.foto} />
        ))}
      </AboutUsPageContainer>
      <Footer />
    </PageWrapper>
  );
};

export default AboutUsPage;
