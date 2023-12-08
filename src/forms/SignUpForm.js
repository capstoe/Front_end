
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../apis/APICalls'; // 회원가입 API 호출 함수

function SignUpForm() {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        // 다른 필요한 정보들 추가
    });

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // 폼 제출 기본 이벤트 방지
        dispatch(signUpUser(userData)); // 회원가입 API 호출
        // 필요한 다른 처리나 리디렉션 등 추가 가능
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder="사용자명" />
            <input type="email" name="email" value={userData.email} onChange={handleInputChange} placeholder="이메일" />
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder="비밀번호" />
            <button type="submit">가입하기</button>
        </form>
    );
}

export default SignUpForm;

