import React, { useState } from "react";

// Store card component
const StoreCard = ({ name, address, status }) => (
  <div className="flex items-center gap-4 bg-[#f8fcf8] px-4 min-h-[72px] py-2 justify-between rounded-lg shadow-sm">
    <div className="flex flex-col justify-center">
      <p className="text-[#0e1b0e] text-base font-medium leading-normal">{name}</p>
      <p className="text-[#4e974e] text-sm font-normal leading-normal">{address}</p>
    </div>
    <div className="shrink-0">
      <p
        className={`text-base font-semibold ${
          status === "Open" ? "text-green-600" : "text-red-500"
        }`}
      >
        {status}
      </p>
    </div>
  </div>
);

const StoreLocatorPage = () => {
  const [search, setSearch] = useState("");

  const stores = [
    { name: "ChillSip Anytown", address: "123 Main Street, Anytown, CA 91234", status: "Open" },
    { name: "ChillSip Springfield", address: "456 Oak Avenue, Springfield, IL 62704", status: "Closed" },
    { name: "ChillSip Metropolis", address: "789 Pine Lane, Metropolis, NY 10001", status: "Open" },
    { name: "ChillSip Gotham", address: "101 Elm Street, Gotham, NJ 07002", status: "Open" },
    { name: "ChillSip Star City", address: "222 Maple Drive, Star City, WA 98101", status: "Closed" },
  ];

  // Filter logic
  const filteredStores = stores.filter(
    (store) =>
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative flex flex-col min-h-screen bg-[#f8fcf8] font-[Manrope]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#e7f3e7] px-10 py-3">
        <div className="flex items-center gap-3">
          <div className="size-5 text-green-600">🍵</div>
          <h2 className="text-lg font-bold text-[#0e1b0e]">ChillSip</h2>
        </div>
        <div className="flex gap-8 items-center">
          <nav className="flex gap-6 text-sm font-medium text-[#0e1b0e]">
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </nav>
          <div className="flex gap-2">
            <button className="h-10 px-4 rounded-lg bg-[#17cf17] text-[#0e1b0e] font-bold">Shop Now</button>
            <button className="h-10 px-4 rounded-lg bg-[#e7f3e7] text-[#0e1b0e] font-bold">Log in</button>
          </div>
        </div>
      </header>

      {/* Search */}
      <div className="px-6 py-5">
        <label className="flex w-full h-12">
          <input
            type="text"
            placeholder="Enter city, state, or ZIP code"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg bg-[#e7f3e7] px-4 text-base text-[#0e1b0e] placeholder:text-[#4e974e] focus:outline-none"
          />
        </label>
      </div>

      {/* Store List */}
      <div className="px-6 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-[#0e1b0e] mb-2">Store Locations</h2>
        {filteredStores.length > 0 ? (
          filteredStores.map((store, idx) => (
            <StoreCard key={idx} {...store} />
          ))
        ) : (
          <p className="text-[#4e974e] italic">No stores found.</p>
        )}
      </div>

      
    </div>
  );
};

export default StoreLocatorPage;
