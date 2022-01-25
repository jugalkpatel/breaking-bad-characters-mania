import { useLocation } from "react-router-dom";
import { Character } from "../../hooks/useGetCharacters.hook";

function Details() {
  const location = useLocation();

  const state = location.state as Character;

  console.log({ state });

  return <h1>This is Details</h1>;
}

export { Details };
