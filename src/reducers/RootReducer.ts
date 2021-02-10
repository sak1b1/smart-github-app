import {combineReducers} from "redux";
import pokemonReducer from "./PokemonReducer";
import repoReducer from "./RepoReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["repo"]
}

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
  repo: repoReducer
});

export default persistReducer(persistConfig, RootReducer);