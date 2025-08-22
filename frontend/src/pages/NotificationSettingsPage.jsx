import React, { useState } from "react";

export default function NotificationSettingsPage() {
  const [preferences, setPreferences] = useState({
    orderEmail: true,
    orderSMS: false,
    subscriptionEmail: true,
    subscriptionSMS: false,
    promoEmail: true,
    promoSMS: false,
  });

  const togglePreference = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleUpdate = () => {
    alert("Preferences updated! " + JSON.stringify(preferences, null, 2));
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#f8fcf8] overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3e7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e1b0e]">
            <h2 className="text-[#0e1b0e] text-lg font-bold leading-tight tracking-[-0.015em]">
              ChillSip
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0e1b0e] text-sm font-medium" href="#">
                Shop
              </a>
              <a className="text-[#0e1b0e] text-sm font-medium" href="#">
                Learn
              </a>
              <a className="text-[#0e1b0e] text-sm font-medium" href="#">
                Our Story
              </a>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0e1b0e] text-[32px] font-bold leading-tight">
                  Notifications
                </p>
                <p className="text-[#4e974e] text-sm">
                  Manage your notification preferences for orders, subscriptions, and promotions.
                </p>
              </div>
            </div>

            {/* Section: Order Updates */}
            <h3 className="text-[#0e1b0e] text-lg font-bold px-4 pb-2 pt-4">
              Order Updates
            </h3>
            {[
              {
                key: "orderEmail",
                label: "Email Notifications",
                desc: "Receive email updates about your order status, from placement to delivery.",
              },
              {
                key: "orderSMS",
                label: "SMS Notifications",
                desc: "Get SMS notifications for important order events, such as shipment and delivery.",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-4 bg-[#f8fcf8] px-4 min-h-[72px] py-2 justify-between"
              >
                <div>
                  <p className="text-[#0e1b0e] font-medium">{item.label}</p>
                  <p className="text-[#4e974e] text-sm">{item.desc}</p>
                </div>
                <label
                  className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 ${
                    preferences[item.key] ? "justify-end bg-[#17cf17]" : "bg-[#e7f3e7]"
                  }`}
                  onClick={() => togglePreference(item.key)}
                >
                  <div className="h-full w-[27px] rounded-full bg-white shadow-md"></div>
                </label>
              </div>
            ))}

            {/* Section: Subscription Reminders */}
            <h3 className="text-[#0e1b0e] text-lg font-bold px-4 pb-2 pt-4">
              Subscription Reminders
            </h3>
            {[
              {
                key: "subscriptionEmail",
                label: "Email Notifications",
                desc: "Receive email reminders before your subscription renews, allowing you to adjust or cancel.",
              },
              {
                key: "subscriptionSMS",
                label: "SMS Notifications",
                desc: "Get SMS reminders for upcoming subscription renewals.",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-4 bg-[#f8fcf8] px-4 min-h-[72px] py-2 justify-between"
              >
                <div>
                  <p className="text-[#0e1b0e] font-medium">{item.label}</p>
                  <p className="text-[#4e974e] text-sm">{item.desc}</p>
                </div>
                <label
                  className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 ${
                    preferences[item.key] ? "justify-end bg-[#17cf17]" : "bg-[#e7f3e7]"
                  }`}
                  onClick={() => togglePreference(item.key)}
                >
                  <div className="h-full w-[27px] rounded-full bg-white shadow-md"></div>
                </label>
              </div>
            ))}

            {/* Section: Promotional Offers */}
            <h3 className="text-[#0e1b0e] text-lg font-bold px-4 pb-2 pt-4">
              Promotional Offers
            </h3>
            {[
              {
                key: "promoEmail",
                label: "Email Notifications",
                desc: "Receive emails about exclusive offers, new product launches, and special events.",
              },
              {
                key: "promoSMS",
                label: "SMS Notifications",
                desc: "Get SMS alerts for limited-time promotions and flash sales.",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-4 bg-[#f8fcf8] px-4 min-h-[72px] py-2 justify-between"
              >
                <div>
                  <p className="text-[#0e1b0e] font-medium">{item.label}</p>
                  <p className="text-[#4e974e] text-sm">{item.desc}</p>
                </div>
                <label
                  className={`relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none p-0.5 ${
                    preferences[item.key] ? "justify-end bg-[#17cf17]" : "bg-[#e7f3e7]"
                  }`}
                  onClick={() => togglePreference(item.key)}
                >
                  <div className="h-full w-[27px] rounded-full bg-white shadow-md"></div>
                </label>
              </div>
            ))}

            {/* Update button */}
            <div className="px-4 py-4">
              <button
                onClick={handleUpdate}
                className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#e7f3e7] text-[#0e1b0e] text-sm font-bold"
              >
                Update Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
