import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignUpCard from "../items/SignUpAPICard"
import { callGetUsersAPI } from "../../apis/APICalls";

function SignUpList() {

    const result = useSelector(state => state.userReducer);
    console.log('userReducer result : ', result);

    const users = result.results;
    console.log('users : ', users);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetUsersAPI())
        },
        []
    );

    return (
        users && (
            <div>
                <h3>회원 수 : { result.count }</h3>
                <button onClick={ () => dispatch(callGetUsersAPI(result.prev)) } >이전</button>
                <button onClick={ () => dispatch(callGetUsersAPI(result.next)) } >다음</button>
                { users.map(user => <SignUpCard key={ user.url } user={ user }/> ) }
            </div>
        )
    );
}

export default SignUpList;