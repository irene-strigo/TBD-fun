import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { ContentWrapper, PageWrapper } from './PagesStyles';
import {
  CarouselContainer,
  LyricsBlock,
  MainPageManifestPicture,
  MainPageManifestWrapper,
  ManifestLyricsBLock,
  ManifestPictureContainer,
  SliderHeading,
  SliderPicture,
} from '../components/CommonStyles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { HeroesData } from '../components/HeroesData';

const MainPage = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentWrapper>
        <MainPageManifestWrapper>
          <ManifestPictureContainer>
            <MainPageManifestPicture src="/assets/images/pngs/MainPicture.png"></MainPageManifestPicture>
          </ManifestPictureContainer>
          <LyricsBlock>
            <ManifestLyricsBLock>
              <p>
                Себе назло, врагам на&nbsp;удивленье
                <br />
                Напишем мы&nbsp;сейчас стихотворенье.
                <br />
                Но&nbsp;вам его читать мы&nbsp;не&nbsp;дадим!
                <br />
                Доселе было в&nbsp;нас ещё смиренье,
                <br />
                Но&nbsp;уж&nbsp;теперь-то мы&nbsp;его съедим.
                <br />
                Съедим, не&nbsp;запивая, по&nbsp;кусочку,
                <br />
                Сознаньем гордым переполнено давясь,
                <br />
                И, уничтожив заключительную строчку,
                <br />
                Забудем букв причудливую вязь.
                <br />
                Бумага не&nbsp;вкусна и&nbsp;не&nbsp;полезна,
                <br />
                Чернила отвратительны на&nbsp;вкус.
                <br />
                Но&nbsp;лучше съесть, чем дать вам безвозмездно
                <br />
                Наш труд&nbsp;&mdash; питомец разума и&nbsp;муз.
                <br />
                Баллады наши вы&nbsp;не&nbsp;понимали,
                <br />
                Хотя, признаться, и&nbsp;читали иногда.
                <br />
                Но&nbsp;в&nbsp;вас лишь глупый смех они рождали.
                <br />
                А&nbsp;он&nbsp;не&nbsp;стоит нашего труда.
                <br />
                Врагам назло, себе на&nbsp;ликованье
                <br />
                Покинем вас мы&nbsp;раз и&nbsp;навсегда.
                <br />
                Тогда поймёте наши излиянья,
                <br />
                И, может быть, вернёмся мы&nbsp;тогда!
              </p>
            </ManifestLyricsBLock>
          </LyricsBlock>
        </MainPageManifestWrapper>

        <CarouselContainer>
          <SliderHeading>Наши персонажи</SliderHeading>
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
          >
            {HeroesData.map((pers) => {
              return (
                <div key={pers.id}>
                  <SliderPicture src={`assets/images/pngs/${pers.url}.png`} />
                  <p className="legend slLegend">{pers.name}</p>
                </div>
              );
            })}
          </Carousel>
        </CarouselContainer>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
};

export default MainPage;
