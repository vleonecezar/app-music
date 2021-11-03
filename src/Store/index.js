import { createStore, combineReducers } from "redux";
import { favoriteReducer } from "./Favorites/favorites.reducer";
import { playerReducer } from "./Player/player.reducer";

const rootReducer = combineReducers({
  favoriteReducer,
  playerReducer,
});

const store = createStore(rootReducer);

export default store;
