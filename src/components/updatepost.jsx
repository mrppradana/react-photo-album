import React, { useState } from 'react';
import axios from 'axios';

function UpdatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
}

const postId = window.location.pathname.split('/').pop();

useEffect(() => {
  axios.get(`https://photo-sharing-api-bootcamp.do.dibimbing.id/posts/${postId}`)
    .then(response => {
      setTitle(response.data.title);
      setDescription(response.data.description);
    })
    .catch(error => {
      console.log(error);
    });
}, []);

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', image);
  axios.put(`https://photo-sharing-api-bootcamp.do.dibimbing.id/posts/${postId}`, formData)
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
      <button type="submit">Update</button>
    </form>
  </div>
);

export default UpdatePost;
