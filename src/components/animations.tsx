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
export const slideingRotate = keyframes`
0%{
      transform: translateX(100%);
    }
      5%{
       transform: translateX( -5%) ;
      }
     10%{
      transform: translateX( -20%);
    }
      15%{
      transform:   translateX( -30%)rotate(10deg);
      }
      20%{
      transform:  rotate(-20deg);
    }
       25%{
      transform:  rotate(20deg);
    }
      30%{
      transform:  rotate(-20deg);
    }
      50% {
        transform:  rotate(20deg);
      }
         55% {
        transform:  rotate(-20deg);
      } 
      
    100% {
       transform: translateX(-100vw) rotate(20deg);
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

export const slideing = keyframes`
0%{
      transform: translateX(-10%) ;
    }
      
    100% {
       transform: translate(-100vw) ;
}`;
