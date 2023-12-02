// import React, { useState, useEffect } from "react";
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
//             검색ㄴ
//           </button>
//           <button className="button" onClick={() => setShowCreateForm(true)}>
//             글쓰기
//           </button>
//         </div>
//         {/* ... rest of the code ... */}
//       </div>
//       {/* 글쓰기 폼 */}
//       {showCreateForm && (
//         <div className="formContainer">
//           <h2>새 글 작성</h2>
//           <label>
//             제목:
//             <input
//               type="text"
//               value={newArticle.title}
//               onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
//             />
//           </label>
//           <label>
//             내용:
//             <textarea
//               value={newArticle.content}
//               onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
//             />
//           </label>
//           <label>
//             첨부파일:
//             <input type="file" multiple onChange={handleFileChange} />
//           </label>
//           <button className="button" onClick={handleCreate}>
//             작성
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FreeBoard;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FreeBoard.css";

const FreeBoard = () => {
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    // other fields
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/board/category");
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error.message);
      }
    };
    fetchArticles();
  }, []);

  const handleCreate = async () => {
    try {
      const response = await axios.post("/board/category/create", newArticle);
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // 요청 후의 작업 수행
    } catch (error) {
      console.error("Error creating article:", error.message);
    }
  };

  // ... (기타 함수 및 JSX 코드)
};

export default FreeBoard;
