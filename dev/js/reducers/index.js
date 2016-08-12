import {combineReducers} from "redux";
import userData from "./userData";
import userRepos from "./userRepos";

const reducer = combineReducers({
    userData: userData,
    userRepos: userRepos
});

export default reducer;