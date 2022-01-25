import { MaxWidthContainer } from "../../styles/common.styles";
import { Main, Loader, ErrorMessage } from "./Home.styles";

import { useTheme } from "styled-components";
import { SpinnerDotted } from "spinners-react";

import { CharacterCard, Navbar } from "../../components";
import { useGetCharacters } from "../../hooks/useGetCharacters.hook";
function Home() {
  const { characters, isLoading, error } = useGetCharacters();
  const theme = useTheme();
  console.log({ characters });
  return (
    <MaxWidthContainer>
      <Navbar />
      <Main>
        {isLoading ? (
          <Loader>
            <SpinnerDotted
              size={50}
              thickness={100}
              speed={100}
              color={theme.primary}
            />
          </Loader>
        ) : error ? (
          <ErrorMessage>Something went wrong! Please refresh....</ErrorMessage>
        ) : (
          <>
            {characters.map((character) => {
              return (
                <CharacterCard key={character.char_id} details={character} />
              );
            })}
          </>
        )}
      </Main>
    </MaxWidthContainer>
  );
}

export { Home };
