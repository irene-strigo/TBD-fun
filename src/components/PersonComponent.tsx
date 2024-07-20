import React, { ReactElement } from 'react';
import { AuthorImage, PersonContainer, PersonText, PersonTextContainer } from './CommonStyles';
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
        <h2>{name}</h2>
        <PersonText>{text}</PersonText>
      </PersonTextContainer>
    </PersonContainer>
  );
};

export default Person;
