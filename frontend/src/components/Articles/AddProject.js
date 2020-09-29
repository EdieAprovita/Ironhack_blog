import React, { useState } from 'react';
import axios from 'axios';

const AddProject = (props) => {
  const [form, setForm] = useState({
    title: '',
    article: '',
    authorName: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/articles', form, { withCredentials: true })
      .then(() => {
        props.getData();
        setForm({ title: '', article: '', authorName: '' });
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(Object.assign({}, setForm, { [name]: value }));
  };

  return (
    <div className='container-fluid'>
      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type='text'
          name='title'
          value={setForm.title}
          onChange={(e) => handleChange(e)}
        />
        <label>Article:</label>
        <textarea
          name='text'
          value={setForm.article}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <label>AuthorName:</label>
        <input
          type='text'
          name='authorName'
          value={setForm.authorName}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default AddProject;
