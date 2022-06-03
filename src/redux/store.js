import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducer/rootReducers";
import thunk from "redux-thunk";

const store = createStore(rootReducers, {}, composeWithDevTools());

export default store;
