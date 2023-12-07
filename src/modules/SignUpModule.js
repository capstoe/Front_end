import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [
    { 
        id: 0,
        name: ''
    }
];

/* 액션 타입 설정 */
export const GET_USERS = 'users/GET_USERS';

/* 고객 관련 액션 함수 */
const actions = createActions({
    [GET_USERS]: () => {}
});

console.log('userActions : ', actions);

/* 리듀서 함수 */
const userReducer = handleActions(
    {
        [GET_USERS]: (state, { payload }) => {

            console.log('payload : ', payload);

            return payload;
        }
    },
    initialState
);

export default userReducer;