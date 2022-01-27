import axios from "axios";
import { useEffect, useReducer } from "react";

import { AppState, Character, ACTIONTYPE } from "../common.types";
import { isCharacterInFavorites } from "../utils";

const initialState: AppState = {
  characters: [],
  favorites: [],
  isLoading: false,
  error: "",
};

function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: state.isLoading ? false : true };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_CHARACTERS":
      return { ...state, characters: action.payload };
    case "SET_FAVORITE":
      return {
        ...state,
        favorites: isCharacterInFavorites(state.favorites, action.payload)
          ? state.favorites.filter((charID) => charID !== action.payload)
          : [...state.favorites, action.payload],
      };
    default:
      throw new Error("action not available");
  }
}

function useGetCharacters() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get<Character[]>(
          "https://breakingbadapi.com/api/characters/"
        );

        dispatch({ type: "SET_CHARACTERS", payload: data });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const msg = error.message;
          dispatch({ type: "SET_ERROR", payload: msg });
          return;
        }

        dispatch({
          type: "SET_ERROR",
          payload: "error while fetching characters...",
        });
      } finally {
        dispatch({ type: "SET_LOADING" });
      }
    };

    fetchCharacters();
  }, []);

  console.log({ state });

  return { state, dispatch };
}

export { useGetCharacters };
