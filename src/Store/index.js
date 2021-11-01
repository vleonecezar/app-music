import { createStore, combineReducers } from "redux";
import { favoriteReducer } from "./Favorites/favorites.reducer";

const rootReducer = combineReducers({
  favoriteReducer,
});

const store = createStore(rootReducer);

export default store;
