import React from 'react';

import NavigationButton from './NavigationButton';
import { HeaderLogoImg, HeaderWrapper } from './CommonStyles';

export type Button = {
  id: number;
  link: string;
  label: string;
};

const Header = () => {
  const headerButtons: Button[] = [
    { id: 1, link: '/main', label: 'Главная страница' },
    { id: 2, link: '/ballades', label: 'Баллады Великого Мунника' },
    { id: 3, link: '/prose', label: 'Проза' },
    { id: 4, link: '/chat', label: 'Чат' },
    { id: 5, link: '/about-us', label: 'Про нас' },
  ];
  return (
    <HeaderWrapper>
      <div>
        <HeaderLogoImg src="/assets/images/pngs/Munnik.png"></HeaderLogoImg>
      </div>
      {headerButtons.map((button) => (
        <NavigationButton key={button.id} link={button.link} label={button.label} />
      ))}
    </HeaderWrapper>
  );
};

export default Header;
