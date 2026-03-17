import { useEffect, useState } from "react";
import axios from "axios";

function GetUsers({ refresh }) {

  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios
      .get("http://localhost:4000/users")
      .then(res => setUsers(res.data));
  };

  useEffect(() => {
    loadUsers();
  }, [refresh]);   
  return (
    <div>

        <h2>Users</h2>

        <table>

        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            </tr>
        </thead>

        <tbody>

            {users.map(u => (
            <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
            </tr>
            ))}

        </tbody>

        </table>

    </div>
    );
}

export default GetUsers;