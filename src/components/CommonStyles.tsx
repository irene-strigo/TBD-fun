import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavButton = styled(Link)`
  background-color: #f3f9a5;
  max-height: 50px;
  border-radius: 3px;
  border: 1px solid #f3f9a5;
  color: #511f31;
  cursor: pointer;
  padding: 10px 10px;
  text-align: center;
  justify-content: center;
  margin-left: 20px;
  text-decoration: none;
  font-size: clamp(1rem, 1vw, 1.5rem);
  white-space: nowrap;

  &:hover,
  :focus {
    background-color: #f7f9ff;
    color: #2c5777;
  }
  @media screen and (max-width: 900px) {
    margin: 5px;
    font-size: clamp(0.7rem, 1vw, 1.5rem);
  }
`;
export const HeaderWrapper = styled.div`
  min-height: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;
export const FooterWrapper = styled.div`
  padding: 10px;
  border: 1px solid black;
  display: flex;

  justify-content: center;
`;
export const HeaderLogoImg = styled.img`
  width: 60px;
`;
export const LyricsBlock = styled.div`
  margin: 10px auto;
  font-style: italic;
`;
export const ManifestLyricsBLock = styled.div`
  text-align: center;
  font-size: clamp(1rem, 1.5vw, 2rem);
`;
export const MainPageManifestPicture = styled.img`
  max-width: 30em;
  @media screen and (max-width: 500px) {
    max-width: 20em;
  }
`;
export const ManifestPictureContainer = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-self: center;
`;
export const MainPageManifestWrapper = styled.div`
  display: flex;
  padding: 2em;
  justify-content: space-around;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const SliderPicture = styled.img`
  max-width: 20em;
  padding-bottom: 50px;
`;
export const CarouselContainer = styled.div`
  margin: 2em auto;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FooterDate = styled.div`
  padding: 0 15px;
`;

export const PageUpLink = styled.a`
position: sticky;
  bottom: 5px;
    color: black;
    text-decoration: none;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 2em;
    border: 1px solid black;
    border-radius: 50%;
    margin: 0 2em;
     &:hover,
  :focus {
    background-color: #ce871d;
    color: #131314;
  }
    @media screen and (max-width: 700px) {
    width: 65px;
    font-size: 2em;
    left: 14em;
    margin: 0 5px;
  }
}
`;
export const ListLink = styled.a`
  color: black;
  text-decoration: none;
  transition: transform 0.2s;
  margin-bottom: 1em;
  &:hover,
  :focus {
    transform: scale(1.5);
    color: #ce871d;
  }
`;
export const FlyingBastards = styled.img`
  max-width: 90%;
`;
