import styled, { css } from 'styled-components';

import { diagonalRight, fall, slideing, slideingRotate } from './animations';

interface IMGProps {
  $animated?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
export const FastBastard = styled.img<IMGProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          opacity: 1;
          animation: ${slideingRotate} 3s linear infinite;
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
  position: absolute;
  max-width: 16em;
  @media screen and (max-width: 700px) {
    max-width: 10em;
  }
`;
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
  max-width: 11em;
  @media screen and (max-width: 700px) {
    left: 30%;
    max-width: 8em;
  }
`;
export const SlideingBastard = styled.img<IMGProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          opacity: 1;
          animation: ${slideing} 2s linear infinite;
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
  position: absolute;
  right: 10px;
  max-width: 16em;
  @media screen and (max-width: 700px) {
    max-width: 10em;
  }
`;
export const DiagonalBastard = styled.img<IMGProps>`
  ${({ $animated }) =>
    $animated
      ? css`
          opacity: 1;
          animation: ${diagonalRight} 5s linear infinite;
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
  position: fixed;
  left: 10px;
  bottom: 10px;
  @media screen and (max-width: 700px) {
    max-width: 10em;
  }
`;
