import axios from "axios";
import { useEffect, useState } from "react";

export type Character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: string[];
};

export type CharacterState = {
  isLoading: boolean;
  characters: Character[] | [];
  error: string;
};

function useGetCharacters() {
  const [characters, setCharacters] = useState<CharacterState>({
    isLoading: false,
    characters: [],
    error: "",
  });

  useEffect(() => {
    setCharacters((prevState) => ({ ...prevState, isLoading: true }));

    const fetchCharacters = async () => {
      try {
        const { data } = await axios.get<Character[]>(
          "https://breakingbadapi.com/api/characters/"
        );

        setCharacters((prevState) => ({
          ...prevState,
          characters: data,
          isLoading: false,
        }));
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const msg = error.message;
          setCharacters((prevState) => ({
            ...prevState,
            error: msg,
            isLoading: false,
          }));
          return;
        }

        setCharacters((prevState) => ({
          ...prevState,
          error: "error while fetching characters",
          isLoading: false,
        }));
      }
    };

    fetchCharacters();
  }, []);

  return characters;
}

export { useGetCharacters };
