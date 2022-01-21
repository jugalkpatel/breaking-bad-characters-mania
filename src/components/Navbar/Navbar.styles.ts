import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const NavbarContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 60px;
  padding: 1rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 3;
`;

const HeartIcon = styled(AiFillHeart)`
  font-size: 3rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.favicon};
`;

export { NavbarContainer, LogoImg, HeartIcon, IconContainer };
