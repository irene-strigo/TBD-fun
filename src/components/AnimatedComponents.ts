import styled, { css } from 'styled-components';

// Импортируем компоненту FontAwesomeIcon и её пропсы,
// на базе которой мы расширим интерфейс передаваемых данных
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// Импорт ключевых кадров
import { fall, spin } from './animations';

interface FAIconProps extends FontAwesomeIconProps {
  // Временный атрибут
  $animated?: boolean; // не будет передан в FontAwesomeIcon
}
interface IMGProps {
  $animated?: boolean;
}
export const FAIcon = styled(FontAwesomeIcon)<FAIconProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          animation: ${spin} 4s infinite linear;
        `
      : css`
          animation: none;
        `}
`;

export const FallingBastard = styled.img<IMGProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          :root {
          }
          animation: ${fall} 2s cubic-bezier(1, -0.42, 0.42, -0.39) infinite;
        `
      : css`
          animation: none;
        `}

  background-color: unset;
  position: sticky;
  top: 5px;
  left: 45%;
  @media screen and (max-width: 700px) {
    left: 30%;
  }
`;
