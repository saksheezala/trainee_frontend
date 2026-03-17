import { useState, useEffect } from "react";
import axios from "axios";

function UpdateUser({ reload, refresh }) {

  const [users, setUsers] = useState([]);

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {

    axios
      .get("http://localhost:4000/users")
      .then(res => setUsers(res.data));

  }, [refresh]);


  const update = async () => {

    if (!id) {
        alert("Select user");
        return;
    }


    if (!email.trim()) {
        alert("Email required");
        return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
        alert("Invalid email");
        return;
    }

   try {

        await axios.put(
            `http://localhost:4000/users/${id}`,
            { email }
        );

        setEmail("");

        reload();

        } catch (err) {

        alert(
            err.response?.data?.error || "error"
        );

        }
    };


  return (
  <div>

    <h2>Update User</h2>

    <select
      value={id}
      onChange={e => setId(e.target.value)}
    >
      <option value="">Select user</option>

      {users.map(u => (
        <option key={u.id} value={u.id}>
          {u.id} - {u.name}
        </option>
      ))}

    </select>


    <input
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />

    <button onClick={update}>
      Update
    </button>

  </div>
);
}

export default UpdateUser;