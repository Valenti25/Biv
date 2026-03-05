"use client";

import { useState } from "react";
import TabReservation from "./_components/TabReservation";
import TabServiceYourself from "./_components/TabServiceYourself";
import TabServiceManagement from "./_components/TabServiceManagement";

export default function ActiveJob() {
  const [activeTab, setActiveTab] = useState("yourself");

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-3 mb-6 min-h-[30px] font-bold text-base">
        <button
          onClick={() => setActiveTab("yourself")}
          className={`p-2 px-1 transition-colors duration-300 border-b-2 ${
            activeTab === "yourself"
              ? "border-pink text-pink font-bold text-base" 
              : "border-transparent text-gray-dark"
          }`}
        >
          รับบริการเอง
        </button>

        <button
          onClick={() => setActiveTab("management")}
          className={`p-2 px-1 transition-colors duration-300 border-b-2 ${
            activeTab === "management"
              ? "border-pink text-pink"
              : "border-transparent text-gray-dark"
          }`}
        >
          ระบบจัดการให้
        </button>

        <button
          onClick={() => setActiveTab("reservation")}
          className={`p-2 px-1 transition-colors duration-300 border-b-2 ${
            activeTab === "reservation"
              ? "border-pink text-pink"
              : "border-transparent text-gray-dark"
          }`}
        >
          เปิดรับการจอง
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "yourself" && <TabServiceYourself />}
        {activeTab === "management" && <TabServiceManagement />}
        {activeTab === "reservation" && <TabReservation />}
      </div>
    </div>
  );
}