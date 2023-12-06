import { combineReducers } from "redux";
import signupReducer from "../modules/SignUpModule"

const rootReducer = combineReducers({
    signupReducer
});
// 리듀서 추가하고 싶으면 ,하고 넣기
// rootReudcer를 가지고 Store를 만든다

export default rootReducer;