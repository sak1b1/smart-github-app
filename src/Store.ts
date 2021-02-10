import {createStore, applyMiddleware} from "redux";
import RootReducer from "./reducers/RootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist"

const Store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(Store);

export type RootStore = ReturnType<typeof RootReducer>



export default Store