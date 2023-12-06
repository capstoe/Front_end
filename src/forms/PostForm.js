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
    <form className="post-form" onSubmit={handleSubmit}>
      <label>
        제목:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        내용:
        <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
};

export default PostForm;
