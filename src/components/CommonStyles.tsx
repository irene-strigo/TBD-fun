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
`;
export const FooterWrapper = styled.div`
  min-height: 1em;
  padding: 10px;
  border: 1px solid black;
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
`;
export const MainPageManifestPicture = styled.img`
  max-width: 25em;
`;
export const MainPageManifestWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SliderPicture = styled.img`
  max-width: 20em;
`;
