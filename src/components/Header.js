// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './Header.css';

// function Header() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   const toggleLogin = () => {
//     setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     navigate('/main');
//   };

//   const style = { color: '#9EE5E9' };

//   return (
//     <div className="header">
//        <NavLink to="/main" style={style}>
//         <h1>TutorLink</h1>
//       </NavLink>
//       <button onClick={toggleLogin}>
//         {isLoggedIn ? '로그아웃' : '로그인'}
//       </button>
//       <nav>
//         <ul>
//           <li><NavLink to="/tutorsearch">튜터찾기</NavLink></li>
//           <li><NavLink to="/tuteesearch">튜티찾기</NavLink></li>
//           <li><NavLink to="/freeboard">자유게시판</NavLink></li>
//           <li><input type="text"  id="search" name="search" placeholder="검색" /></li>
//           {isLoggedIn ? (
//             <>
//               <li onClick={handleLogout} style={style}>로그아웃</li>
//               <li><NavLink to="/mypage">마이페이지</NavLink></li>
//             </>
//           ) : (
//             <>
//               <li><NavLink to="/login">로그인</NavLink></li>
//               <li><NavLink to="/signup1">회원가입</NavLink></li>
//               <li><NavLink to="/signup">회원가입</NavLink></li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// }
// export default Header;

// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './Header.css';
// import axios from 'axios';

// function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // 페이지 로드 시 토큰 확인
//     const token = localStorage.getItem('token');

//     if (token) {
//       // 토큰이 존재한다면 로그인 상태로 설정
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogin = async () => {
//     try {
//       // 로그인 API 호출 (이 부분은 실제 백엔드와의 통신을 위한 코드입니다)
//       const response = await axios.post('http://localhost:8080/api/login', {
//         // 로그인을 위한 사용자 정보 전달 (예: username, password 등)
//         // 이 예시에서는 하드코딩되어 있지만, 보안상의 이유로 사용자 입력을 받는 것이 좋습니다.
//         username: 'user123',
//         password: 'password123',
//       });

//       const { token } = response.data;

//       // 토큰을 로컬 스토리지에 저장
//       localStorage.setItem('token', token);

//       // 로그인 상태로 변경
//       setIsLoggedIn(true);

//       // 로그인 후 리다이렉트할 경로로 이동
//       navigate('/');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   const handleLogout = () => {
//     // 로컬 스토리지에서 토큰 삭제
//     localStorage.removeItem('token');

//     // 로그아웃 상태로 변경
//     setIsLoggedIn(false);

//     // 로그아웃 후 리다이렉트할 경로로 이동 (예: '/main'으로 이동)
//     navigate('/main');
//   };

//   const style = { color: '#9EE5E9' };

//   return (
//     <div className="header">
//       <NavLink to="/main" style={style}>
//         <h1>TutorLink</h1>
//       </NavLink>
//       <button onClick={isLoggedIn ? handleLogout : handleLogin}>
//         {isLoggedIn ? '로그아웃' : '로그인'}
//       </button>
//       <nav>
//         <ul>
//           <li><NavLink to="/tutorsearch">튜터찾기</NavLink></li>
//           <li><NavLink to="/tuteesearch">튜티찾기</NavLink></li>
//           <li><NavLink to="/freeboard">자유게시판</NavLink></li>
//           <li><input type="text" id="search" name="search" placeholder="검색" /></li>
//           {isLoggedIn ? (
//             <>
//               <li onClick={handleLogout} style={style}>로그아웃</li>
//               <li><NavLink to="/mypage">마이페이지</NavLink></li>
//             </>
//           ) : (
//             <>
//               <li><NavLink to="/login">로그인</NavLink></li>
//               <li><NavLink to="/signup1">회원가입</NavLink></li>
//               <li><NavLink to="/signup">회원가입</NavLink></li>
//             </>
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Header;

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import axios from 'axios';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 페이지 로드 시 토큰 확인
    const token = localStorage.getItem('token');

    if (token) {
      // 토큰이 존재한다면 로그인 상태로 설정
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      // 로그인 API 호출 (이 부분은 실제 백엔드와의 통신을 위한 코드입니다)
      const response = await axios.post('http://localhost:8080/api/login', {
        // 로그인을 위한 사용자 정보 전달 (예: username, password 등)
        // 이 예시에서는 하드코딩되어 있지만, 보안상의 이유로 사용자 입력을 받는 것이 좋습니다.
        username: 'user123',
        password: 'password123',
      });

      const { token } = response.data;

      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', token);

      // 로그인 상태로 변경
      setIsLoggedIn(true);

      // 로그인 후 리다이렉트할 경로로 이동
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    // 로컬 스토리지에서 토큰 삭제
    localStorage.removeItem('token');

    // 로그아웃 상태로 변경
    setIsLoggedIn(false);

    // 로그아웃 후 리다이렉트할 경로로 이동 (예: '/main'으로 이동)
    navigate('/main');
  };

  const linkStyle = { color: '#9EE5E9', textDecoration: 'none' };

  return (
    <div className="header">
      <NavLink to="/main" style={linkStyle}>
        <h1>TutorLink</h1>
      </NavLink>
      <nav>
        <ul>
          <li><NavLink to="/tutorsearch" style={linkStyle}>튜터찾기</NavLink></li>
          <li><NavLink to="/tuteesearch" style={linkStyle}>튜티찾기</NavLink></li>
          <li><NavLink to="/freeboard" style={linkStyle}>자유게시판</NavLink></li>
          <li><input type="text" id="search" name="search" placeholder="검색" /></li>
          {isLoggedIn ? (
            <>
              <li onClick={handleLogout} style={linkStyle}>로그아웃</li>
              <li><NavLink to="/mypage" style={linkStyle}>마이페이지</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login" style={linkStyle}>로그인</NavLink></li>
              <li><NavLink to="/signup1" style={linkStyle}>회원가입</NavLink></li>
              <li><NavLink to="/signup" style={linkStyle}>회원가입</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
