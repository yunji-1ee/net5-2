import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 예제 데이터
  const user = {
    id: id,
    email: "example@example.com",
    age: 25,
    address: "Seoul, South Korea",
  };

  return (
    <div className="page">
      <h2>User Details</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <button onClick={() => navigate("/list")}>Back to List</button>
    </div>
  );
};

export default DetailPage;
