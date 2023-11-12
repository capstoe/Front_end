import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom';

function Header() {
    const activeStyle = {
        backgroundColor: 'purple',
        color: 'white'
    }
    
    return (
        <div className="header">
            <h1 style={{ color: '#9EE5E9' }}>TutorLink</h1>
            <nav>
                <ul>
                    <li><NavLink to="/tutorsearch" style={({isActive}) => isActive? activeStyle: undefined}>튜터찾기</NavLink></li>
                    <li><NavLink to="/tuteesearch" style={({isActive}) => isActive? activeStyle: undefined}>튜티찾기</NavLink></li>
                    <li><NavLink to="/freeboard" style={({isActive}) => isActive? activeStyle: undefined}>자유게시판1</NavLink></li>
                </ul>
            </nav>

            <div className="search-bar">
                <input type="text" placeholder="검색" />
               
            </div>

            {/* <div className="user-options">
                <a href="#">로그인</a>
                <a href="#">회원가입</a>
            </div> */}

               
                <li><NavLink to="/login" style={({isActive}) => isActive? activeStyle: undefined}>로그인</NavLink></li>
                <li><NavLink to="/signup" style={({isActive}) => isActive? activeStyle: undefined}>회원가입</NavLink></li>
                <li><NavLink to="/freeboard2" style={({isActive}) => isActive? activeStyle: undefined}>자유게시판2</NavLink></li>
                <li><NavLink to="/main" style={({isActive}) => isActive? activeStyle: undefined}>메인페이지</NavLink></li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive? activeStyle: undefined}>마이페이지</NavLink></li>
                
        </div>
    );


        <div className="header">
            <h1 style={{ color: '#9EE5E9' }}>TutorLink</h1>
            <nav>
                <ul>
                    <li>튜터찾기</li>
                    <li>튜티찾기</li>
                    <li>자유게시판</li>
                </ul>
            </nav>
            <div className="search-bar">
                <input type="text" placeholder="검색" />
               
            </div>
            <div className="user-options">
                <a href="#">로그인</a>
                <a href="#">회원가입</a>
            </div>
        </div>
    
    

    // return (
    //     <div className="header">
    //         <h1 style={{ color: '#9EE5E9' }}>TutorLink</h1>
    //         <nav>
    //             <ul>
    //                 <li>튜터찾기</li>
    //                 <li>튜티찾기</li>
    //                 <li>자유게시판</li>
    //             </ul>
    //         </nav>
    //         <div className="search-bar">
    //             <input type="text" placeholder="검색" />
               
    //         </div>
    //         <div className="user-options">
    //             <a href="#">로그인</a>
    //             <a href="#">회원가입</a>
    //         </div>
    //     </div>
    // );
}

export default Header;
