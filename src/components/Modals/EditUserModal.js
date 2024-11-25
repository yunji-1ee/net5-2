import React, { useState, useEffect } from "react";

const EditUserModal = ({ user, onClose, fetchUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setAge(user.age || "");
      setAddress(user.address || "");
    }
  }, [user]);

  const handleUpdateUser = async () => {
    if (!name || !email || !age || !address) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch(`https://672c8aef1600dda5a9f8de2e.mockapi.io/api/v1/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, age, address }),
      });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      fetchUsers(); // 사용자 목록 갱신
      onClose(); // 모달 닫기
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <button onClick={handleUpdateUser}>Update User</button>
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EditUserModal;
