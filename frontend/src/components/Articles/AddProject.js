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
      <h1>Add Article</h1>
    </div>
  );
};

export default AddProject;
