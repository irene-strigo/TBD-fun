import React, { useState } from 'react';
import { PageWrapper } from './PagesStyles';
import Header from '../components/Header';
import Footer from '../components/Footer';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { HeroesData } from '../components/HeroesData';
import Hero from '../components/Hero';
import { GalleryContainer } from '../components/CommonStyles';

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <PageWrapper>
      <Header />



      <GalleryContainer>

        {HeroesData.map((pers) => {
          return (

            <Hero key={pers.id} onClick={() => setIsModal(true)} url={`assets/images/pngs/${pers.url}.png`} id={pers.id} name={pers.name} description={pers.description} />

          );
        })}

      </GalleryContainer>

      <Footer />
    </PageWrapper >
  );
};

export default GalleryPage;
