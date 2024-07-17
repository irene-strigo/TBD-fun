import { keyframes } from 'styled-components';

export const spin = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
}`;

export const fall = keyframes`
    0% {
  
      transform: translateY(0);
    }
      
    100% {
      transform: translateY(110vh);
}`;

export const diagonalRight = keyframes`
0% {
        transform: translatex(0) translatey(0)
    }
    100% {
        transform: translatex(110vh) translatey(110vh);
    }
}`;
