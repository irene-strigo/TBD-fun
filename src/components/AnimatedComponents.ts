import styled, { css } from 'styled-components';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { fall, spin } from './animations';

interface FAIconProps extends FontAwesomeIconProps {
  $animated?: boolean;
}
interface IMGProps {
  $animated?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const FallingBastard = styled.img<IMGProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          opacity: 1;
          animation: ${fall} 3s cubic-bezier(1, -0.42, 0.42, -0.39) infinite;
        `
      : css`
          animation: none;
          opacity: 0;
        `}
  &:hover {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  background-color: unset;
  position: sticky;
  top: 5px;
  left: 45%;

  @media screen and (max-width: 700px) {
    left: 30%;
  }
`;

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
