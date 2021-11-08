import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesReducer } from "./Favorites/favorites.reducer";
import { playerReducer } from "./Player/player.reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["favoritesReducer"],
};

const rootReducer = combineReducers({
  favoritesReducer,
  playerReducer,
});

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);
