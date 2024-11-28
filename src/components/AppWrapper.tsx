import { ReactElement } from "react";
import { ThemeContextType } from "./App";

type Props = {
  children?: ReactElement[] | ReactElement
  theme?: ThemeContextType
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;

};

const AppWrapper = ({ onClick, theme, children }: Props) => {


  return (
    <div style={theme} onClick={onClick}>{children}</div>
  );
};

export default AppWrapper;
