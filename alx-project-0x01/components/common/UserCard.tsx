import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, username, phone, website, address }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition">
      <h2 className="text-xl font-semibold text-blue-600">{name}</h2>
      <p className="text-gray-700">@{username}</p>

      <div className="mt-3 text-sm text-gray-600">
        <p><span className="font-semibold">Email:</span> {email}</p>
        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Website:</span> {website}</p>
      </div>

      <div className="mt-3 text-sm text-gray-600">
        <p className="font-semibold">Address</p>
        <p>{address.street}, {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
