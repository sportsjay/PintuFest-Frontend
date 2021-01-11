const system_env =
  "https://ik2birnfgd.execute-api.ap-southeast-1.amazonaws.com/dev";

export const GAMES_API = {
  GET_ALL_GAMES: `http://${system_env}/game-api/`,
  GET_GAME_BY_NAME: (name) => {
    return `http://${system_env}/game-api/${name}`;
  },
  BOOK_GAME_SLOT: `http://${system_env}/game-api/book`,
};
