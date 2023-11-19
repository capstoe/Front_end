<<<<<<< HEAD
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInLinks = [
    <li key="logout"><NavLink to="/logout">로그아웃</NavLink></li>,
    <li key="mypage"><NavLink to="/mypage">마이페이지</NavLink></li>
  ];

  const loggedOutLinks = [
    <li key="login"><NavLink to="/login">로그인</NavLink></li>,
    <li key="signup"><NavLink to="/signup">회원가입</NavLink></li>
  ];

  const currentLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  const toggleLogin = () => {
  
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
  };

  return (
    <div className="header">
      <h1>TutorLink</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <nav>
        <ul>
          {currentLinks}
          <li><NavLink to="/tutorsearch">튜터찾기</NavLink></li>
          <li><NavLink to="/tuteesearch">튜티찾기</NavLink></li>
          <li><NavLink to="/freeboard">자유게시판</NavLink></li>
          <div>
            <input type="text" placeholder="검색" />
          </div>
        </ul>
      </nav>
    </div>
  );
}

=======
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInLinks = [
    <li key="logout"><NavLink to="/logout">로그아웃</NavLink></li>,
    <li key="mypage"><NavLink to="/mypage">마이페이지</NavLink></li>
  ];

  const loggedOutLinks = [
    <li key="login"><NavLink to="/login">로그인</NavLink></li>,
    <li key="signup"><NavLink to="/signup">회원가입</NavLink></li>
  ];

  const currentLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  const toggleLogin = () => {
  
    setIsLoggedIn(prevIsLoggedIn => !prevIsLoggedIn);
  };

  return (
    <div className="header">
      <h1>TutorLink</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
      <nav>
        <ul>
          {currentLinks}
          <li><NavLink to="/tutorsearch">튜터찾기</NavLink></li>
          <li><NavLink to="/tuteesearch">튜티찾기</NavLink></li>
          <li><NavLink to="/freeboard">자유게시판</NavLink></li>
          <div>
            <input type="text" placeholder="검색" />
          </div>
        </ul>
      </nav>
    </div>
  );
}

>>>>>>> origin/main
export default Header;