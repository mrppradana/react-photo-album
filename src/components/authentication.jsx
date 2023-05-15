import React, { useState } from 'react';
import axios from 'axios';

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
}

function handleSubmit(event) {
  event.preventDefault();
  axios.post('https://photo-sharing-api-bootcamp.do.dibimbing.id/auth/login', { email, password })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

return (
  <>
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  </>
);

export default Authentication;
