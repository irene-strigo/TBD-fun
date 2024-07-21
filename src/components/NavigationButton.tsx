import { NavButton } from './CommonStyles';

type Props = {
  link: string;
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

const NavigationButton = ({ link, label }: Props) => {
  return <NavButton to={link}>{label}</NavButton>;
};

export default NavigationButton;
