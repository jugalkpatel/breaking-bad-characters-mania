import { useNavigate } from "react-router-dom";

import Logo from "../../assets/imgs/logo.svg";

import {
  NavbarContainer,
  LogoImg,
  HeartIcon,
  IconContainer,
  LogoContainer,
} from "./Navbar.styles";

function Navbar() {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <LogoContainer onClick={() => navigate("/")}>
        <LogoImg src={Logo} />
      </LogoContainer>
      <IconContainer onClick={() => navigate("/favorites")}>
        <HeartIcon />
      </IconContainer>
    </NavbarContainer>
  );
}

export { Navbar };
