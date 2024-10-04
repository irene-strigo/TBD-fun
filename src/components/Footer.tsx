import React from 'react';
import { FooterDate, FooterWrapper, HeaderLogoImg } from './CommonStyles';
const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <HeaderLogoImg src="/assets/images/pngs/Mudachok6.png" />
        <FooterDate>2024</FooterDate>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
