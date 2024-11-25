import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import AddUserModal from "../components/Modals/AddUserModal";
import EditUserModal from "../components/Modals/EditUserModal";

const ListPage = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // 사용자 목록 가져오기
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

  // 사용자 삭제
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://672c8aef1600dda5a9f8de2e.mockapi.io/api/v1/users/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user. Please try again.");
    }
  };

  // 사용자 수정
  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  return (
    <div>
      <button className="btn_add" onClick={() => setIsAddModalOpen(true)}>
        Add User
      </button>
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
      {isAddModalOpen && (
        <AddUserModal
          onClose={() => setIsAddModalOpen(false)}
          fetchUsers={fetchUsers}
        />
      )}
      {isEditModalOpen && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setIsEditModalOpen(false)}
          fetchUsers={fetchUsers}
        />
      )}
    </div>
  );
};

export default ListPage;
