import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return <div className="bg-green-600 p-4 text-2xl ">User: {userid}</div>;
}

export default User;
