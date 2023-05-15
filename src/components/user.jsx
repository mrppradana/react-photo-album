import { useState } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
}

useEffect(() => {
  axios.get('https://photo-sharing-api-bootcamp.do.dibimbing.id/users')
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}, []
);

    return (
      <>
      <div>
        <h2>Daftar User</h2>
        <table>
          <thead>
            <tr>
              <th>Nama Lengkap</th>
              <th>Username</th>
              <th>Email</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button>Ikuti</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    );

export default User;

