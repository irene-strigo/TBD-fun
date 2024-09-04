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
export const slideing = keyframes`
0% {
  
      transform: translateX(90%);
    }
      
    100% {
      transform: translateX(-90vh);
}

 `;
export const diagonalRight = keyframes`
0% {
        transform: translatex(0px) translatey(0px)
    }
    100% {
    
        transform: translatex(100vw) translatey(-100vh);
    }
}`;
