import React, { ReactElement } from 'react';
import {
  AboutUsName,
  AuthorImage,
  PersonContainer,
  PersonText,
  PersonTextContainer,
} from './CommonStyles';
type Props = {
  name: string;
  text: ReactElement;
  image?: string;
};
const Person = ({ name, text, image }: Props) => {
  return (
    <PersonContainer>
      <AuthorImage src={image} alt="portrait"></AuthorImage>
      <PersonTextContainer>
        <AboutUsName>{name}</AboutUsName>
        <PersonText>{text}</PersonText>
      </PersonTextContainer>
    </PersonContainer>
  );
};

export default Person;
