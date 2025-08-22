import React, { useState } from "react";

const ManagePaymentMethodsPage = () => {
  const [methods, setMethods] = useState([
    { id: 1, brand: "Visa", last4: "4567", exp: "03/2025", logo: "/visa.svg" },
    { id: 2, brand: "Mastercard", last4: "8901", exp: "01/2026", logo: "/mastercard.svg" },
    { id: 3, brand: "American Express", last4: "2345", exp: "05/2024", logo: "/amex.svg" },
  ]);

  const [newCard, setNewCard] = useState({ brand: "", last4: "", exp: "", logo: "" });
  const [showForm, setShowForm] = useState(false);

  const addMethod = () => {
    if (!newCard.brand || !newCard.last4 || !newCard.exp) return;
    setMethods([...methods, { ...newCard, id: Date.now() }]);
    setNewCard({ brand: "", last4: "", exp: "", logo: "" });
    setShowForm(false);
  };

  const removeMethod = (id) => {
    setMethods(methods.filter((m) => m.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fcf8]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#e7f3e7] px-10 py-3">
        <h2 className="text-lg font-bold text-[#0e1b0e]">ChillSip</h2>
        <button className="px-4 py-2 bg-[#e7f3e7] rounded-lg font-bold text-sm">
          Cart
        </button>
      </header>

      {/* Content */}
      <div className="px-6 md:px-40 py-5 flex flex-1 justify-center">
        <div className="w-full max-w-[512px]">
          <h1 className="text-[32px] font-bold text-[#0e1b0e] mb-6">
            Payment Methods
          </h1>

          <h3 className="text-lg font-bold text-[#0e1b0e] mb-2">
            Saved Payment Methods
          </h3>

          {methods.map((m) => (
            <div
              key={m.id}
              className="flex items-center justify-between bg-[#f8fcf8] px-4 py-3 border-b border-[#e7f3e7]"
            >
              <div className="flex items-center gap-4">
                <img src={m.logo} alt={m.brand} className="h-6 w-10 object-contain" />
                <div>
                  <p className="font-medium text-[#0e1b0e]">
                    {m.brand} ... {m.last4}
                  </p>
                  <p className="text-sm text-[#4e974e]">Expires {m.exp}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => removeMethod(m.id)}
                  className="text-red-600 text-sm font-bold"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Add New Payment Method */}
          {showForm ? (
            <div className="mt-4 p-4 border rounded-lg bg-white">
              <input
                type="text"
                placeholder="Card Brand (e.g. Visa)"
                value={newCard.brand}
                onChange={(e) => setNewCard({ ...newCard, brand: e.target.value })}
                className="w-full border p-2 mb-2 rounded"
              />
              <input
                type="text"
                placeholder="Last 4 digits"
                value={newCard.last4}
                onChange={(e) => setNewCard({ ...newCard, last4: e.target.value })}
                className="w-full border p-2 mb-2 rounded"
              />
              <input
                type="text"
                placeholder="Expiry (MM/YYYY)"
                value={newCard.exp}
                onChange={(e) => setNewCard({ ...newCard, exp: e.target.value })}
                className="w-full border p-2 mb-2 rounded"
              />
              <button
                onClick={addMethod}
                className="w-full bg-[#17cf17] text-[#0e1b0e] font-bold py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="mt-4">
              <button
                onClick={() => setShowForm(true)}
                className="px-4 py-2 bg-[#e7f3e7] rounded-lg font-bold text-sm"
              >
                Add Payment Method
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagePaymentMethodsPage;
