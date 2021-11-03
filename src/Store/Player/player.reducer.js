export function playerReducer(state = {}, action) {
  switch (action.type) {
    case "HANDLE_PLAYER":
      return action.payload;
    default:
      return state;
  }
}
