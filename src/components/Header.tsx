import React, { useState } from 'react';

import NavigationButton from './NavigationButton';
import { HeaderButtonsContainer, HeaderLogoImg, HeaderWrapper } from './CommonStyles';
import BurgerButton from './BurgerButton';
import BurgerComponent from './BurgerComponent';

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
  { id: 5, link: '/chat', label: 'Чат' },
  { id: 6, link: '/about-us', label: 'Про нас' },
  { id: 7, link: '/gallery', label: 'Галерея' },
  { id: 8, link: '/log-in', label: 'Войти' },
];
const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function processBurger() {
    return isBurgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
  }

  return (
    <HeaderWrapper>
      <a href="/main">
        <HeaderLogoImg src="/assets/images/pngs/Munnik.png"></HeaderLogoImg>
      </a>
      <HeaderButtonsContainer>
        {headerButtons.map((button) => (
          <NavigationButton key={button.id} link={button.link} label={button.label} />
        ))}
      </HeaderButtonsContainer>
      {isBurgerOpen && (
        <>
          <BurgerComponent isOpen={isBurgerOpen}></BurgerComponent>
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
