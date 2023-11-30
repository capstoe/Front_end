import React, { useState } from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 제출 로직을 추가하세요.
    console.log(`제목: ${title}, 내용: ${content}`);
  };

  return (
    <div>
      <h1>게시판 글쓰기</h1>
      <form onSubmit={handleSubmit}>
        <label>
          제목:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          내용:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit">작성</button>
        <button type="button" onClick={() => {setTitle(''); setContent('');}}>취소</button>
      </form>
    </div>
  );
};

export default PostForm;
