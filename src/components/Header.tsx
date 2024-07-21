import React, { useState } from 'react';

import NavigationButton from './NavigationButton';
import {
  BurgerButtonsContainer,
  HeaderButtonsContainer,
  HeaderLogoImg,
  HeaderWrapper,
} from './CommonStyles';
import BurgerButton from './BurgerButton';

export type Button = {
  id: number;
  link: string;
  label: string;
};

const Header = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  function processBurger() {
    return isBurgerOpen ? setBurgerOpen(false) : setBurgerOpen(true);
  }

  const headerButtons: Button[] = [
    { id: 1, link: '/main', label: 'Главная страница' },
    { id: 2, link: '/ballades', label: 'Баллады Великого Мунника' },
    { id: 3, link: '/prose', label: 'Проза' },
    { id: 3, link: '/poetry', label: 'Стихи' },
    { id: 4, link: '/chat', label: 'Чат' },
    { id: 5, link: '/about-us', label: 'Про нас' },
  ];
  return (
    <HeaderWrapper>
      <div>
        <HeaderLogoImg src="/assets/images/pngs/Munnik.png"></HeaderLogoImg>
      </div>
      <HeaderButtonsContainer>
        {headerButtons.map((button) => (
          <NavigationButton
            key={button.id}
            link={button.link}
            label={button.label}
            onClick={() => {
              setBurgerOpen(false);
            }}
          />
        ))}
      </HeaderButtonsContainer>
      {!isBurgerOpen && (
        <BurgerButtonsContainer>
          {headerButtons.map((button) => (
            <NavigationButton
              key={button.id}
              link={button.link}
              label={button.label}
              onClick={() => {
                setBurgerOpen(false);
              }}
            />
          ))}
        </BurgerButtonsContainer>
      )}
      <BurgerButton
        sign={isBurgerOpen ? <>&equiv;</> : <>&times;</>}
        isOpen={false}
        onClick={() => {
          processBurger();
        }}
      ></BurgerButton>
    </HeaderWrapper>
  );
};

export default Header;
