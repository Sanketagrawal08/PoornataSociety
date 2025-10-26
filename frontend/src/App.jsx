import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  // Add user to MongoDB
  const handleAdd = async () => {
    if (!username || !email) {
      alert("Please enter both username and email");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/add", {
        username,
        email,
      });
      console.log("Response:", res.data);
      alert("User added successfully!");
      setUsername("");
      setEmail("");
      handleGetUsers(); // refresh list after adding
    } catch (err) {
      console.error("Error adding user:", err);
      alert("Failed to add user");
    }
  };

  // Fetch all users
  const handleGetUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to fetch users");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>User Management</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />

        <button
          onClick={handleAdd}
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add User
        </button>
      </div>

      <button
        onClick={handleGetUsers}
        style={{
          padding: "10px 20px",
          background: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Get All Users
      </button>

      <div style={{ marginTop: "30px" }}>
        <h3>All Users:</h3>
        {users.length === 0 ? (
          <p>No users found</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((u) => (
              <li key={u._id} style={{ marginBottom: "6px" }}>
                <strong>{u.username}</strong> - {u.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
