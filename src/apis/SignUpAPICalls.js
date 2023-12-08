import { GET_USERS } from "../modules/SignUpModule";

export function callGetUsersAPI(url, params) {

    const requestURL = url || ''; 

    return async function getUsers(dispatch, getState) {
    
        const result = await fetch(requestURL).then(res => res.json());
    
        console.log('result : ', result);
    
        dispatch({ type: GET_USERS, payload: result });
    }
}
// thunk 함수, 반환된 함수를 dispatch로 비동기 방식으로 넘긴다. (async)