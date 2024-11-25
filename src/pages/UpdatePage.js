import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UpdatePage = () => {
  const [user, setUser] = useState({ name: "", email: "", age: "", address: "" });
  const [editCount, setEditCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://672c8aef1600dda5a9f8de2e.mockapi.io/api/v1/users/1");
        const data = await response.json();
        setUser({
          name: data.name || "",
          email: data.email || "",
          age: data.age || "",
          address: data.address || "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const handleInputChange = async (field, value) => {
    const updatedUser = { ...user, [field]: value };
    setUser(updatedUser);
    setEditCount((prev) => prev + 1);

    try {
      await fetch(
        `https://672c8aef1600dda5a9f8de2e.mockapi.io/api/v1/users/1`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser),
        }
      );
    } catch (error) {
      console.error("user:", error);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="name"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="email"
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={user.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          placeholder="age"
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={user.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
          placeholder="address"
        />
      </div>
      <p>Total Edits: {editCount}</p>
      <button onClick={() => navigate("/list")}>Back to List</button>
    </div>
  );
};

export default UpdatePage;
