import { useNavigate, useParams } from "react-router-dom";

import {
  Close,
  Heart,
  CloseButton,
  DetailsContainer,
  HeartIcon,
  ImgContainer,
  Name,
  Seasons,
  Label,
  TileContainer,
  Tile,
  Actor,
  BirthDayCake,
  NickName,
  TombStone,
  TileLabel,
  TileContent,
  Line,
  Image,
  List,
  Title,
  Occupation,
  WidthContainer,
  HeartFill,
} from "./Details.styles";

import { Character } from "../../common.types";
import { useAppContext } from "../../contexts";
import { isCharacterInFavorites } from "../../utils";

function Details() {
  const { id } = useParams();
  const charID = parseInt(id as string);
  const navigate = useNavigate();
  const { characters, dispatch, favorites } = useAppContext();
  const details = characters.find(
    ({ char_id }) => char_id === charID
  ) as Character;

  const isCharInFavorites = isCharacterInFavorites(
    favorites,
    details.char_id
  ) ? (
    <HeartFill />
  ) : (
    <Heart />
  );

  return (
    <WidthContainer>
      <DetailsContainer>
        <CloseButton onClick={() => navigate("/")}>
          <Close />
        </CloseButton>
        <HeartIcon
          onClick={() =>
            dispatch({ type: "SET_FAVORITE", payload: details.char_id })
          }
        >
          {isCharInFavorites}
        </HeartIcon>

        <Name>
          <Title>{details.name}</Title>
          <Line />
        </Name>

        <ImgContainer>
          <Image src={details.img} />
        </ImgContainer>

        <Seasons>
          <Title>Seasons</Title>
          <Line />
          <List>
            {details.appearance.map((season) => (
              <Label key={season}>{season}</Label>
            ))}
          </List>
        </Seasons>

        <TileContainer>
          <Tile>
            <Actor />
            <div>
              <TileLabel>Actor</TileLabel>
              <TileContent>{details.portrayed}</TileContent>
            </div>
          </Tile>

          <Tile>
            <BirthDayCake />
            <div>
              <TileLabel>Birthday</TileLabel>
              <TileContent>{details.birthday}</TileContent>
            </div>
          </Tile>

          <Tile>
            <NickName />
            <div>
              <TileLabel>NickName</TileLabel>
              <TileContent>{details.nickname}</TileContent>
            </div>
          </Tile>

          <Tile>
            <TombStone />
            <div>
              <TileLabel>Alive ?</TileLabel>
              <TileContent>{details.status}</TileContent>
            </div>
          </Tile>
        </TileContainer>

        <Occupation>
          <Title>Occupation</Title>
          <Line />
          <List>
            {details.occupation.map((occupation, index) => {
              return <Label key={index}>{occupation}</Label>;
            })}
          </List>
        </Occupation>
      </DetailsContainer>
    </WidthContainer>
  );
}

export { Details };
