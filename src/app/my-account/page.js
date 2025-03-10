// MyAccountPage.jsx
"use client";
import React, { useState } from "react";
import UserSidebar from "./components/UserSidebar";
import DashboardTab from "./components/DashboardTab";
import OrdersTab from "./components/OrdersTab";
import AddressTab from "./components/AddressTab";
import SettingsTab from "./components/SettingsTab";
import OrderDetailsModal from "./components/OrderDetailsModal";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import './MyAccountPage.css';

const MyAccountPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [openDetail, setOpenDetail] = useState(false);

  const tabContent = {
    dashboard: <DashboardTab />,
    orders: <OrdersTab setOpenDetail={setOpenDetail} />,
    address: <AddressTab />,
    setting: <SettingsTab />,
  };

  return (
    <>
      <Header />
      <div className="my-account-wrapper mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="breadcrumb mb-8">
            <h1 className="text-4xl font-bold text-gray-800">My Account</h1>
            <p className="text-gray-600 mt-2">
              Welcome back, manage your profile here
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <UserSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            <div className="md:w-2/3">
              <div className="tab-container bg-white rounded-xl shadow-lg p-6 transition-all duration-300">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>
        </div>

        {openDetail && <OrderDetailsModal setOpenDetail={setOpenDetail} />}
      </div>
      <Footer />
    </>
  );
};

export default MyAccountPage;
