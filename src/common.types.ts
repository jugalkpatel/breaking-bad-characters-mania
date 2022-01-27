import React from "react";

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

export type AppState = {
  characters: Character[] | [];
  favorites: number[] | [];
  isLoading: boolean;
  error: string;
};

export type ACTIONTYPE =
  | { type: "SET_LOADING" }
  | { type: "SET_ERROR"; payload: string }
  | { type: "SET_CHARACTERS"; payload: Character[] }
  | { type: "SET_FAVORITE"; payload: number };

export type AppContextType = AppState & {
  dispatch: React.Dispatch<ACTIONTYPE>;
};
