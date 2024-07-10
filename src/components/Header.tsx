import React from 'react';

import NavigationButton from './NavigationButton';

export type Button = {
  id: number;
  link: string;
  label: string;
};

const Header = () => {
  const headerButtons: Button[] = [
    { id: 1, link: '/main', label: 'Main Page' },
    { id: 5, link: '/about-us', label: 'About Us' },
  ];
  return (
    <div>
      {headerButtons.map((button) => (
        <NavigationButton key={button.id} link={button.link} label={button.label} />
      ))}
    </div>
  );
};

export default Header;
