import React, { useState } from "react";

const AddUserModal = ({ onClose, fetchUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleAddUser = async () => {
    if (!name || !email || !age || !address) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("https://672c8aef1600dda5a9f8de2e.mockapi.io/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, age, address }),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      fetchUsers();
      onClose();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddUserModal;
