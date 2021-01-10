const system_env = "localhost:4000";

export const GAMES_API = {
  GET_ALL_GAMES: `http://${system_env}/game-api/`,
  GET_GAME_BY_NAME: (name) => {
    return `http://${system_env}/game-api/${name}`;
  },
  BOOK_GAME_SLOT: `http://${system_env}/game-api/book`,
};
