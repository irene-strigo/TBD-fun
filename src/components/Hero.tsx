import { GalleryHeroImg, HeroContainer, ModalDescription, ModalHeroContainer, ModalHeroImg } from "./CommonStyles";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from "react";

type Props = {
  id: number;
  url: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  name: string;
  description?: string;
};

const Hero = ({ id, name, onClick, url, description }: Props) => {
  const [open, setOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Modal open={isModal} onClose={() => setIsModal(false)} center>
        <ModalHeroContainer onClick={onClick}>
          <h3 >{name}</h3>
          <ModalHeroImg src={url}></ModalHeroImg>
          <ModalDescription>{description}</ModalDescription>
        </ModalHeroContainer></Modal>
      <HeroContainer onClick={() => setIsModal(true)}>
        <h3 >{name}</h3>
        <GalleryHeroImg src={url}></GalleryHeroImg>
      </HeroContainer>
    </>
  );

};

export default Hero;
