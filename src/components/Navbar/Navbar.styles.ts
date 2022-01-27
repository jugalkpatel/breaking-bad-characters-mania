import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  padding: 1rem;
`;

const LogoContainer = styled.article`
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 100px;
  height: 100%;
`;

const IconContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
`;

const HeartIcon = styled(AiFillHeart)`
  font-size: 3rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.favicon};
`;

export { NavbarContainer, LogoImg, HeartIcon, IconContainer, LogoContainer };
