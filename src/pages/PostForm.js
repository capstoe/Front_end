import React, { useState } from 'react';
import './PostForm.css';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="post-form">
      <div className="form-group">
        <label htmlFor="title">제목:</label>
=======
    <form className="post-form" onSubmit={handleSubmit}>
      <label>
        제목:
>>>>>>> origin/main
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        내용:
        <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
<<<<<<< HEAD
      </div>
      <div className="form-group">
        <label htmlFor="attachment">파일첨부:</label>
        <input type="file" name="attachment" onChange={handleFileChange} />
      </div>
=======
      </label>
      <br />
>>>>>>> origin/main
      <button type="submit">제출</button>
    </form>
  );
};

export default PostForm;