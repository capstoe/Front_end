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

        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="content">내용:</label>
        <textarea name="content" value={formData.content} onChange={handleChange}></textarea>
      </div>
      <button type="submit">제출</button>
    </form>
  );
};

export default PostForm;
