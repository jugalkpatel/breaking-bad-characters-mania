import styled from "styled-components";

const borderRadius = "1rem";

const MaxWidthContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const CharacterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: ${borderRadius};
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  padding: 1rem;
  gap: 1rem;
  align-items: center;

  @media (min-width: 568px) {
    grid-template-columns: repeat(auto-fill, minmax(15.4rem, 15.4rem));
    justify-content: center;
  }
`;

const Message = styled.h2`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  grid-column: 1 / -1;
`;

const HeightContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export {
  MaxWidthContainer,
  borderRadius,
  CharacterImg,
  Main,
  Message,
  HeightContainer,
};
