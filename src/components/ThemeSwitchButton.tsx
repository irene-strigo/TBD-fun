import React, { ReactElement } from 'react';
import { SwitchThemeButtonIcon } from './CommonStyles';
type Props = {
  sign: string;
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const ThemeSwitchButton = ({ sign, onClick }: Props) => {
  return <div onClick={onClick}>
    <SwitchThemeButtonIcon src={`/assets/Icons/${sign}.png`} />
  </div>;
};

export default ThemeSwitchButton;
