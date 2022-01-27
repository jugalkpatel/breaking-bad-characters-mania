import styled from "styled-components";
import { borderRadius } from "../../styles/common.styles";

const CardContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 1fr 1fr;
  font-family: "Rubik";
  color: ${({ theme }) => theme.secondary};
  border-radius: ${borderRadius};
  position: relative;
  cursor: pointer;
  height: 25rem;
`;

const ImgContainer = styled.article`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
`;

const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  align-self: center;
  padding: 1rem;
`;

const NameText = styled.h3`
  margin-bottom: 0.3rem;
`;

const FavButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.favicon};
  border-color: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export { CardContainer, TextContainer, NameText, ImgContainer, FavButton };
