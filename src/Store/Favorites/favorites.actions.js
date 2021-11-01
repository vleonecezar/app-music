export function add(item) {
  return {
    type: "ADD_FAVORITE",
    payload: item,
  };
}

export function remove(item) {
  return {
    type: "REMOVE_FAVORITE",
    payload: item,
  };
}
