import React from "react";

const UserItem = ({ user, onDelete, onEdit }) => {
  return (
    <div className="user-item">
      <p><strong>🙋🏻Name:</strong> {user.name}</p>
      <p><strong>💌Email:</strong> {user.email}</p>
      <p><strong>🗓️Age:</strong> {user.age}</p>
      <p><strong>🏡Address:</strong> {user.address}</p>
      <button
        className="btn_edit"
        onClick={() => onEdit(user)}
      >
        Edit
      </button>
      <button
        className="btn_delete"
        onClick={() => onDelete(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserItem;
