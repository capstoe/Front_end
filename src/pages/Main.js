<<<<<<< HEAD
<<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import "./Main.css";

// // ... (Profile 컴포넌트는 그대로 유지)

// function Main() {
//   const [recentPosts, setRecentPosts] = useState([]);

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       try {
//         const response = await axios.get('/api/board/category/create'); // 수정된 URL
//         setRecentPosts(response.data);
//       } catch (error) {
//         console.error("최신 글 불러오기 실패:", error);
//       }
//     };

//     fetchRecentPosts();
//   }, []);

//   // ... (나머지 코드 그대로 유지)
// }

// export default Main;

import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Main.css";
=======
import React from "react";
import "./Main.css"; 
>>>>>>> origin/main

function Profile({ imageSrc, text }) {
  return (
    <div className="profile">
      <img src={imageSrc} alt="프로필 이미지" />
      <p>{text}</p>
    </div>
  );
}

function Main() {
<<<<<<< HEAD
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('/api/freeboard/recent-posts');
        setRecentPosts(response.data);
      } catch (error) {
        console.error("최신 글 불러오기 실패:", error);
      }
    };

    fetchRecentPosts();
  }, []);

=======
>>>>>>> origin/main
  return (
    <div className="main-container">
      <h1 className="main-title">튜터찾고 대학가자!</h1>
      <h1 className="main-title">검증된 튜터</h1>
      <div className="profiles-container">
        <Profile
          imageSrc="url_to_image1.jpg"
          text="서울대 경영학과"
        />
        <Profile
          imageSrc="url_to_image2.jpg"
          text="연세대 경영학과"
        />
        <Profile
          imageSrc="url_to_image3.jpg"
          text="고려대 경영학과"
        />
      </div>
      <h1 className="main-title">튜터링크 게시판 물어보세요!</h1>
<<<<<<< HEAD
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
=======
>>>>>>> origin/main
    </div>
  );
}

export default Main;
=======
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import "./Main.css";

// // ... (Profile 컴포넌트는 그대로 유지)

// function Main() {
//   const [recentPosts, setRecentPosts] = useState([]);

//   useEffect(() => {
//     const fetchRecentPosts = async () => {
//       try {
//         const response = await axios.get('/api/board/category/create'); // 수정된 URL
//         setRecentPosts(response.data);
//       } catch (error) {
//         console.error("최신 글 불러오기 실패:", error);
//       }
//     };

//     fetchRecentPosts();
//   }, []);

//   // ... (나머지 코드 그대로 유지)
// }

// export default Main;

import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Main.css";

function Profile({ imageSrc, text }) {
  return (
    <div className="profile">
      <img src={imageSrc} alt="프로필 이미지" />
      <p>{text}</p>
    </div>
  );
}

function Main() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await axios.get('/api/freeboard/recent-posts');
        setRecentPosts(response.data);
      } catch (error) {
        console.error("최신 글 불러오기 실패:", error);
      }
    };

    fetchRecentPosts();
  }, []);

  return (
    <div className="main-container">
      <h1 className="main-title">튜터찾고 대학가자!</h1>
      <h1 className="main-title">검증된 튜터</h1>
      <div className="profiles-container">
        <Profile
          imageSrc="url_to_image1.jpg"
          text="서울대 경영학과"
        />
        <Profile
          imageSrc="url_to_image2.jpg"
          text="연세대 경영학과"
        />
        <Profile
          imageSrc="url_to_image3.jpg"
          text="고려대 경영학과"
        />
      </div>
      <h1 className="main-title">튜터링크 게시판 물어보세요!</h1>
      <ul>
        {recentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
>>>>>>> origin/main
