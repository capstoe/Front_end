// import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom';
// import "./FreeBoard.css";

// const FreeBoard = () => {
//   const [articles, setArticles] = useState([]);
//   const [searchKeyword, setSearchKeyword] = useState("");
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [newArticle, setNewArticle] = useState({
//     title: "",
//     content: "",
//     attachments: [], // Array to store attached files
//   });


//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch();
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setArticles(data);
//       } catch (error) {
//         console.error("Error fetching articles:", error.message);
//       }
//     };
//     fetchArticles();
//   }, []);

//   const handleSearch = () => {
//     setArticles(articles.filter((article) => article.title.includes(searchKeyword)));
//   };

//   const handleCreate = () => {
//     // Add the new article with attachments to the list
//     setArticles([
//       ...articles,
//       {
//         id: Date.now(),
//         title: newArticle.title,
//         author: "CurrentUser",
//         createdAt: new Date(),
//         attachments: newArticle.attachments,
//       },
//     ]);
//     setShowCreateForm(false);
//     setNewArticle({
//       title: "",
//       content: "",
//       attachments: [],
//     });
//   };

//   const handleFileChange = (e) => {
//     // Update the attachments array with the selected files
//     const files = Array.from(e.target.files);
//     setNewArticle((prev) => ({
//       ...prev,
//       attachments: prev.attachments.concat(files),
//     }));
//   };

//   return (
//     <div className="container">
//       <div className="board">
//         <h1>자유게시판</h1>
//         <div className="input">
//           <input
//             type="text"
//             placeholder="검색어를 입력하세요"
//             value={searchKeyword}
//             onChange={(event) => setSearchKeyword(event.target.value)}
//           />
//           <button className="button" onClick={handleSearch}>
//             검색
//           </button>
//           <Link to="/postform">
//             <button className="button">
//               글쓰기
//             </button>
//           </Link>
//         </div>
//         {/* ... rest of the code ... */}
//       </div>
//     </div>
//   );
// };

// export default FreeBoard;
// FreeBoard.js
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./FreeBoard.css";

const FreeBoard = () => {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    attachments: [], // Array to store attached files
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://localhost8080/articles'); // 올바른 API URL로 수정
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    };
    fetchArticles();
  }, []);

  const handleSearch = () => {
    setArticles(articles.filter((article) => article.title.includes(searchKeyword)));
  };

  const handleCreate = () => {
    // Add the new article with attachments to the list
    setArticles([
      ...articles,
      {
        id: Date.now(),
        title: newArticle.title,
        author: "CurrentUser",
        createdAt: new Date(),
        attachments: newArticle.attachments,
      },
    ]);
    setShowCreateForm(false);
    setNewArticle({
      title: "",
      content: "",
      attachments: [],
    });
  };

  const handleFileChange = (e) => {
    // Update the attachments array with the selected files
    const files = Array.from(e.target.files);
    setNewArticle((prev) => ({
      ...prev,
      attachments: prev.attachments.concat(files),
    }));
  };

  return (
    <div className="container">
      <div className="board">
        <h1>자유게시판</h1>
        <div className="input">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <button className="button" onClick={handleSearch}>
            검색
          </button>
          <Link to="/postform">
            <button className="button">
              글쓰기
            </button>
          </Link>
        </div>
        {/* ... rest of the code ... */}
      </div>
    </div>
  );
};

export default FreeBoard;
