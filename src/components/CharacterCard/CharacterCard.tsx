import { useNavigate } from "react-router";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import {
  CardContainer,
  NameText,
  TextContainer,
  ImgContainer,
  FavButton,
} from "../CharacterCard/CharacterCard.styles";
import { CharacterImg } from "../../styles/common.styles";

import { Character } from "../../common.types";
import { useAppContext } from "../../contexts";
import { isCharacterInFavorites } from "../../utils";

export type CharacterCardProps = {
  charID: number;
};

function CharacterCard({ charID }: CharacterCardProps) {
  const navigate = useNavigate();
  const { characters, dispatch, favorites } = useAppContext();

  const details = characters.find(
    ({ char_id }) => char_id === charID
  ) as Character;

  const addToFavorites = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    dispatch({ type: "SET_FAVORITE", payload: details.char_id });
  };

  const isInFavorites = isCharacterInFavorites(favorites, details.char_id) ? (
    <AiFillHeart />
  ) : (
    <AiOutlineHeart />
  );

  return (
    <CardContainer
      onClick={() =>
        navigate(`/character/${details.char_id}`, { state: details })
      }
    >
      <ImgContainer>
        <CharacterImg src={details.img} />
      </ImgContainer>
      <TextContainer>
        <NameText>{details.name}</NameText>
        <h1>{details.portrayed}</h1>
      </TextContainer>
      <FavButton onClick={addToFavorites}>{isInFavorites}</FavButton>
    </CardContainer>
  );
}

export { CharacterCard };
