import React from 'react';
import axios from 'axios';

function DeletePost() {
  const postId = window.location.pathname.split('/').pop();

  function handleDelete() {
    axios.delete(`https://photo-sharing-api-bootcamp.do.dibimbing.id/posts/${postId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h2>Apakah Anda yakin ingin menghapus postingan ini?</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeletePost;