import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleLogin = () => {
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/main');
  };

  const style = { color: '#9EE5E9' };

  return (
    <div className="header">
       <NavLink to="/main" style={style}>
        <h1>TutorLink</h1>
      </NavLink>
      <button onClick={toggleLogin}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <nav>
        <ul>
          <li><NavLink to="/tutorsearch">튜터찾기</NavLink></li>
          <li><NavLink to="/tuteesearch">튜티찾기</NavLink></li>
          <li><NavLink to="/freeboard">자유게시판</NavLink></li>
          <li><input type="text" placeholder="검색" /></li>
          {isLoggedIn ? (
            <>
              <li onClick={handleLogout} style={style}>로그아웃</li>
              <li><NavLink to="/mypage">마이페이지</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">로그인</NavLink></li>
              <li><NavLink to="/signup">회원가입</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default Header;