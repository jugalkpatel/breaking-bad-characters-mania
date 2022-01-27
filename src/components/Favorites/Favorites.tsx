import { Main, Message, HeightContainer } from "../../styles/common.styles";

import { useAppContext } from "../../contexts";
import { CharacterCard } from "../../components";
import { isCharacterInFavorites } from "../../utils";

function Favorites() {
  const { favorites, characters } = useAppContext();

  const favCharacters = characters.filter((char) =>
    isCharacterInFavorites(favorites, char.char_id)
  );

  return (
    <Main>
      {favCharacters.length ? (
        favCharacters.map(({ name, char_id }) => (
          <CharacterCard key={name} charID={char_id} />
        ))
      ) : (
        <HeightContainer>
          <Message>Favorites are empty.</Message>
        </HeightContainer>
      )}
    </Main>
  );
}

export { Favorites };
