import { useNavigate } from "react-router";
import {
  ActorText,
  CardContainer,
  CharacterImg,
  NameText,
  TextContainer,
  ImgContainer,
  FavButton,
} from "../CharacterCard/CharacterCard.styles";

import { AiOutlineHeart } from "react-icons/ai";
import { Character } from "../../hooks/useGetCharacters.hook";

export type CharacterCardProps = {
  details: Character;
};

function CharacterCard({ details }: CharacterCardProps) {
  const navigate = useNavigate();
  const { name, portrayed, img } = details;
  return (
    <CardContainer
      onClick={() => navigate(`/character/${portrayed}`, { state: details })}
    >
      <ImgContainer>
        <CharacterImg src={img} />
      </ImgContainer>
      <TextContainer>
        <NameText>{name}</NameText>
        <ActorText>{portrayed}</ActorText>
      </TextContainer>
      <FavButton>
        <AiOutlineHeart />
      </FavButton>
    </CardContainer>
  );
}

export { CharacterCard };
