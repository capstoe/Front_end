import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import axios from 'axios';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username: 'user123',
        password: 'password123',
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/main');
  };

  const linkStyle = { color: '#9EE5E9', textDecoration: 'none' };

  return (
    <div className="header">
      <NavLink to="/main" style={{ ...linkStyle, position: 'absolute', left: 0 }}>
        <h1>TutorLink</h1>
      </NavLink>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <nav>
        <ul>
          <li><NavLink to="/tutorsearch">튜터찾기</NavLink></li>
          <li><NavLink to="/tuteesearch">튜티찾기</NavLink></li>
          <li><NavLink to="/freeboard">자유게시판</NavLink></li>
          <li><input type="text"  id="search" name="search" placeholder="검색" /></li>
          {isLoggedIn ? (
            <>
              <li onClick={handleLogout} style={linkStyle}>로그아웃</li>
              <li><NavLink to="/mypage">마이페이지</NavLink></li>
            </>
          ) : (
            <>
              <li><NavLink to="/login">로그인</NavLink></li>
              <li><NavLink to="/signup">회원가입</NavLink></li>
              <button><NavLink to="/tutorsignup">Tutor회원가입</NavLink></button>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
