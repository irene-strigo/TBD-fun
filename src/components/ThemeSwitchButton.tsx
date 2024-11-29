import React from 'react';
import { SwitchButtonWrapper, SwitchThemeButtonIcon } from './CommonStyles';
type Props = {
  sign: string;
  isOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};
const ThemeSwitchButton = ({ sign, onClick }: Props) => {
  return (
    <SwitchButtonWrapper onClick={onClick}>
      <SwitchThemeButtonIcon src={`/assets/Icons/${sign}.png`} />
    </SwitchButtonWrapper>
  );
};

export default ThemeSwitchButton;
