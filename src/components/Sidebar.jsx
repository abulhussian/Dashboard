// Sidebar.jsx
import React from "react";
import { Button, Nav } from "react-bootstrap";
import {
  FaUser,
  FaBell,
  FaCalendarAlt,
  FaCreditCard,
  FaCog,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import "./Sidebar.css"; // for custom hover color

const Sidebar = () => {
  return (
    <div className="bg-black text-white d-flex flex-column align-items-center py-3 gap-3 sidebar">
      <div className="mb-4">
        <FaUser size={24} />
      </div>

      <Nav className="flex-column text-center text-lg-start w-100 px-2 gap-2 small">
        <Button className="text-white d-flex align-items-center gap-2 hover-pink">
          <FaCreditCard /> <span className="d-none d-lg-inline">Dashboard</span>
        </Button>
        <Button className="text-white d-flex align-items-center gap-2 hover-pink">
          <FaUsers /> <span className="d-none d-lg-inline">Users</span>
        </Button>
        <Button className="text-white d-flex align-items-center gap-2 hover-pink">
          <FaUserTie /> <span className="d-none d-lg-inline">Candidates</span>
        </Button>
        <Button className="text-white d-flex align-items-center gap-2 hover-pink">
          <FaUser /> <span className="d-none d-lg-inline">Profile</span>
        </Button>
        <Button className="text-white d-flex align-items-center gap-2 hover-pink">
          <FaCog /> <span className="d-none d-lg-inline">Settings</span>
        </Button>
      </Nav>
    </div>
  );
};

export default Sidebar;
