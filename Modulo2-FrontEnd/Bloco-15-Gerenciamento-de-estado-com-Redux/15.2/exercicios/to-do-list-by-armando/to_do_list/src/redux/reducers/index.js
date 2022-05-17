import { combineReducers } from "redux";
import addListItem from "./addReducer";

const rootReducer = combineReducers({ addListItem });

export default rootReducer;
