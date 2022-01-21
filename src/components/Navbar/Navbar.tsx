import Logo from "../../assets/imgs/logo.svg";
import {
  NavbarContainer,
  LogoImg,
  HeartIcon,
  IconContainer,
} from "./Navbar.styles";
function Navbar() {
  return (
    <NavbarContainer>
      <LogoImg src={Logo} />
      <IconContainer>
        <HeartIcon />
      </IconContainer>
    </NavbarContainer>
  );
}

export { Navbar };
