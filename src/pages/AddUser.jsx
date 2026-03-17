import { useState } from "react";
import axios from "axios";

function AddUser({ reload }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async () => {

    if (!name.trim()) {
        alert("Name required");
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

        await axios.post(
            "http://localhost:4000/users",
            { name, email }
        );

        setName("");
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

    <h2>Add User</h2>

    <input
      placeholder="Name"
      value={name}
      onChange={e => setName(e.target.value)}
    />

    <input
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />

    <button onClick={submit}>
      Add
    </button>

  </div>
);
}

export default AddUser;