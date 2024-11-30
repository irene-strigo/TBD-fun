import React, { useState } from 'react';

import NavigationButton from './NavigationButton';
import { HeaderButtonsContainer, HeaderLogoImg, HeaderWrapper } from './CommonStyles';
import BurgerButton from './BurgerButton';
import BurgerComponent from './BurgerComponent';
import { Link } from 'react-router-dom';

export type Button = {
  id: number;
  link: string;
  label: string;
};
export const headerButtons: Button[] = [
  { id: 1, link: '/main', label: 'Главная страница' },
  { id: 2, link: '/ballades', label: 'Баллады Великого Мунника' },
  { id: 3, link: '/prose', label: 'Проза' },
  { id: 4, link: '/poetry', label: 'Стихи' },
  { id: 5, link: '/newBlood', label: 'Новое поколение' },
  { id: 6, link: '/chat', label: 'Чат' },
  { id: 7, link: '/about-us', label: 'Про нас' },
  { id: 8, link: '/gallery', label: 'Галерея' },
];

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function processBurger() {
    return isBurgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
  }

  return (
    <HeaderWrapper>
      <Link to="/main">
        <HeaderLogoImg src="/assets/images/pngs/Munnik.png"></HeaderLogoImg>
      </Link>
      <HeaderButtonsContainer>
        {headerButtons.map((button) => (
          <NavigationButton key={button.id} link={button.link} label={button.label} />
        ))}
      </HeaderButtonsContainer>
      {isBurgerOpen && (
        <>
          <BurgerComponent
            isOpen={isBurgerOpen}
            onClick={() => {
              setBurgerOpen(false);
            }}
          ></BurgerComponent>
        </>
      )}
      <BurgerButton
        sign={isBurgerOpen ? <>&times;</> : <>&equiv;</>}
        isOpen={false}
        onClick={() => {
          processBurger();
        }}
      ></BurgerButton>
    </HeaderWrapper>
  );
};

export default Header;
