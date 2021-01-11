const system_env =
  "https://ik2birnfgd.execute-api.ap-southeast-1.amazonaws.com/dev";

export const GAMES_API = {
  GET_ALL_GAMES: `${system_env}/game-api/`,
  GET_GAME_BY_NAME: (name) => {
    return `${system_env}/game-api/${name}`;
  },
  BOOK_GAME_SLOT: `${system_env}/game-api/book`,
};
