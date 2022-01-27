import { useTheme } from "styled-components";
import { SpinnerDotted } from "spinners-react";

import { Main, Message, HeightContainer } from "../../styles/common.styles";
import { Loader } from "./Characters.styles";

import { useAppContext } from "../../contexts";
import { CharacterCard } from "../../components";

function Characters() {
  const { characters, error, isLoading } = useAppContext();
  const theme = useTheme();
  return (
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
        <HeightContainer>
          <Message>Something went wrong! Please refresh....</Message>
        </HeightContainer>
      ) : (
        <>
          {characters.map(({ name, char_id }) => {
            return <CharacterCard key={name} charID={char_id} />;
          })}
        </>
      )}
    </Main>
  );
}

export { Characters };
