// ProfileCard.tsx
import React from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Appointments from "./components/Dashboard";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard";

export default function ProfileCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black-500">
      <div className="  flex justify-center items-center">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        {/* Profile Card */}
        <Profile />
        {/* <Notifications /> */}

        {/* Appointments */}
        <Dashboard />

        {/* Health Chart and Step Tracker */}
        <Chart />
      </div>
    </div>
  );
}
