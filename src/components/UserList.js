import React from "react";
import UserItem from "./UserItem";

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default UserList;
