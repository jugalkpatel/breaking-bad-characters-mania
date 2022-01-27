import styled from "styled-components";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { VscPerson } from "react-icons/vsc";
import { RiCake2Fill } from "react-icons/ri";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { GiTombstone } from "react-icons/gi";

import { CharacterImg, MaxWidthContainer } from "../../styles/common.styles";

const WidthContainer = styled(MaxWidthContainer)`
  max-width: 991px;
`;

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  gap: 1rem;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Heart = styled(AiOutlineHeart)`
  font-size: 2rem;
  color: ${({ theme }) => theme.favicon};
`;

const HeartFill = styled(AiFillHeart)`
  font-size: 2rem;
  color: ${({ theme }) => theme.favicon};
`;

const Close = styled(CgClose)`
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-self: start;
  padding: 0.5rem;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
`;

const HeartIcon = styled.button`
  grid-column: -1 / -2;
  justify-self: end;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.black};
`;

// name
const Name = styled.section`
  grid-column: 1 / -1;
`;

// image
const ImgContainer = styled.article`
  grid-column: 1 / -1;
  max-height: 300px;

  @media (min-width: 568px) {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
  }
`;

const Image = styled(CharacterImg)`
  object-fit: contain;
`;

// seasons
const Seasons = styled.section`
  grid-column: 1 / -1;

  @media (min-width: 568px) {
    grid-column: 2 / 4;
  }
`;

const List = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

// occupation
const Occupation = styled.section`
  grid-column: 1 / -1;
`;

const Label = styled.label`
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
`;

const TileContainer = styled.section`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;

  @media (min-width: 568px) {
    grid-column: 2 / 4;
  }
`;

const Tile = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  padding: 1rem;
  border-radius: 0.7rem;
`;

const TileLabel = styled.label`
  display: block;
  font-weight: 900;
  font-size: 1.3rem;
`;

const TileContent = styled.label`
  font-size: 1rem;
  font-weight: 500;
`;

const Actor = styled(VscPerson)`
  font-size: 2rem;
`;
const BirthDayCake = styled(RiCake2Fill)`
  font-size: 2rem;
`;
const NickName = styled(MdOutlineDriveFileRenameOutline)`
  font-size: 2rem;
`;
const TombStone = styled(GiTombstone)`
  font-size: 2rem;
`;

const Line = styled.hr`
  grid-column: 1 / -1;
  color: ${({ theme }) => theme.border};
  margin: 0.5rem 0;
`;

export {
  ImgContainer,
  DetailsContainer,
  CloseButton,
  HeartIcon,
  Heart,
  Close,
  Name,
  Seasons,
  Label,
  Tile,
  TileContainer,
  TileLabel,
  Actor,
  BirthDayCake,
  NickName,
  TombStone,
  TileContent,
  Line,
  Image,
  List,
  Title,
  Occupation,
  WidthContainer,
  HeartFill,
};
