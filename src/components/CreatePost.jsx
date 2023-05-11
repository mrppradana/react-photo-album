import React, { useState } from 'react';
import axios from 'axios';

function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', image);
  axios.post('https://photo-sharing-api-bootcamp.do.dibimbing.id/posts', formData)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}


return (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Judul</label>
        <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="description">Deskripsi</label>
        <textarea id="description" value={description} onChange={e => setDescription(e.target.value)}></textarea>
      </div>
      <div>
        <label htmlFor="image">Gambar</label>
        <input type="file" id="image" accept="image/*" onChange={e => setImage(e.target.files[0])} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
);


export default CreatePost;

