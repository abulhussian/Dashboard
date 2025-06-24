import React from "react";
import {
  FaUser,
  FaBell,
  FaCalendarAlt,
  FaCog,
  FaCreditCard,
  FaWalking,
} from "react-icons/fa";
export default function Profile() {
  return (
    <>
      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-4 shadow-md flex flex-col items-center gap-2">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div className="text-center">
          <h2 className="font-semibold text-lg">Ivan Jackson</h2>
          <p className="text-sm text-gray-500">24 years, California</p>
        </div>
        <div className="flex gap-4 mt-2 text-sm">
          <span className="bg-gray-100 px-2 py-1 rounded">Blood: A+</span>
          <span className="bg-gray-100 px-2 py-1 rounded">170cm</span>
          <span className="bg-gray-100 px-2 py-1 rounded">60kg</span>
        </div>
      </div>
    </>
  );
}
