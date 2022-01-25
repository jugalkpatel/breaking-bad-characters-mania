import styled from "styled-components";

const Main = styled.main`
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

const Loader = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  height: 70vh;
`;

const ErrorMessage = styled.h2`
  color: ${({ theme }) => theme.primary};
  text-align: center;
  grid-column: 1 / -1;
`;

export { Main, Loader, ErrorMessage };
