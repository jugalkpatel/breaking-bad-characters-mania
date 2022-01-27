function isCharacterInFavorites(favorites: number[] | [], charID: number) {
  return favorites.length &&
    favorites.filter((char_id) => charID === char_id).length
    ? true
    : false;
}

export { isCharacterInFavorites };
