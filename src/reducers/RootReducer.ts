import {combineReducers} from "redux";
import repoReducer from "./RepoReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["repo"]
}

const RootReducer = combineReducers({
  repo: repoReducer
});

export default persistReducer(persistConfig, RootReducer);