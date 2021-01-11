const system_env =
  "https://ik2birnfgd.execute-api.ap-southeast-1.amazonaws.com/dev";

export const ROOM_API = {
  UPDATE_ROOM_SLOT_STATUS: (gameRoom) => {
    return `http://${system_env}/room-api/update-status/${gameRoom}`;
  },
  GET_ROOM_SLOT_STATUS: (gameRoom) => {
    return `http://${system_env}/room-api/get-status/${gameRoom}`;
  },
};
