const system_env = "localhost:4000";

export const ROOM_API = {
  UPDATE_ROOM_SLOT_STATUS: (gameRoom) => {
    return `http://${system_env}/room-api/update-status/${gameRoom}`;
  },
  GET_ROOM_SLOT_STATUS: (gameRoom) => {
    return `http://${system_env}/room-api/get-status/${gameRoom}`;
  },
};
