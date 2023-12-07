import React, { useState } from 'react';
import './PostForm.css';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    attachment: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      attachment: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <div className="form-group">
        <label htmlFor="title">제목:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="content">내용:</label>
        <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="attachment">파일첨부:</label>
        <input type="file" name="attachment" onChange={handleFileChange} />
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default PostForm;
