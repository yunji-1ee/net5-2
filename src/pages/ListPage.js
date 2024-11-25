import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import AddUserModal from "../components/Modals/AddUserModal";

const ListPage = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://672c8aef1600dda5a9f8de2e.mockapi.io/api/v1/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center">User List</h1>
      <button
        className="btn_add"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add User
      </button>
      <UserList users={users} fetchUsers={fetchUsers} />

      {isAddModalOpen && (
        <AddUserModal onClose={() => setIsAddModalOpen(false)} fetchUsers={fetchUsers} />
      )}
    </div>
  );
};

export default ListPage;
