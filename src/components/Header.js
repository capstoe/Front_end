import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const activeStyle = {
        backgroundColor: 'purple',
        color: 'white'
    };

    return (
        <div className="header">
            <div className="logo-and-nav">
                <h1 style={{ color: '#9EE5E9' }}>TutorLink</h1>
                <nav>
                    <ul>
                    <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle: undefined}>메인페이지</NavLink></li>
                    <li><NavLink to="/tutorsearch" style={({isActive}) => isActive? activeStyle: undefined}>튜터찾기</NavLink></li>
                    <li><NavLink to="/tuteesearch" style={({isActive}) => isActive? activeStyle: undefined}>튜티찾기</NavLink></li>
                    <li><NavLink to="/freeboard" style={({isActive}) => isActive? activeStyle: undefined}>자유게시판</NavLink></li>
                    <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>마이페이지</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="검색" />
            </div>
            <div className="user-options">
                <NavLink to="/login" activeStyle={activeStyle}>로그인</NavLink> <br/>
                <NavLink to="/signup" activeStyle={activeStyle}>회원가입</NavLink>
            </div>
        </div>
    );
}

export default Header;
