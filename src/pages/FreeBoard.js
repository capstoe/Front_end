import React, { useState, useEffect, useRef } from "react";

const FreeBoard = () => {
  const [articles, setArticles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false); // 새로운 글 작성 폼을 보여줄지 여부
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    // 게시물을 가져옵니다.
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://example.com/api/articles");
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
    // 여기서 새로운 글을 생성하는 API 호출 등의 로직을 추가할 수 있습니다.
    // 예시로 로컬 상태에 새로운 글을 추가하고, 폼을 닫습니다.
    setArticles([...articles, { id: Date.now(), title: newArticle.title, author: "CurrentUser", createdAt: new Date(), attachments: [] }]);
    setShowCreateForm(false);
    setNewArticle({
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <div style={{ backgroundColor: "white", border: "1px solid black" }}>
        <h1>자유게시판</h1>
        <div style={{ margin: 10 }}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
          <button onClick={() => setShowCreateForm(true)}>글쓰기</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일자</th>
              <th>첨부파일</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>{article.author}</td>
                <td>{article.createdAt}</td>
                <td>{article.attachments.length > 0 ? "있음" : "없음"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 글쓰기 폼 */}
      {showCreateForm && (
        <div style={{ marginTop: 20 }}>
          <h2>새 글 작성</h2>
          <label>
            제목:
            <input
              type="text"
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            />
          </label>
          <label>
            내용:
            <textarea
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
            />
          </label>
          <button onClick={handleCreate}>작성</button>
        </div>
      )}
    </div>
  );
};

export default FreeBoard;
