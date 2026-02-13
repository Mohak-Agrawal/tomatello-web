import React, { useState } from "react";

const SUNFLOWER_ACCENT = "#ffc34d"; // Soft Yellow (Primary Accent)
const EARTH_BROWN = "#594033"; // Soft Brown (Dark Text)
const CREAM_NEUTRAL = "#f7f0e6"; // Soft Warm Neutral (Main Background)
const LUSH_GREEN = "#69a054"; // Gentle Green (Growth/Success)
const CARD_STYLE = `rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] border-t-2 border-l-2 border-opacity-30 p-6`;

const AdminDashboard: React.FC = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil.",
      price: "₹499",
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      description: "Creamy pasta with pancetta and parmesan.",
      price: "₹599",
    },
  ]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${CARD_STYLE}`}
        style={{ backgroundColor: CREAM_NEUTRAL }}
      >
        <div className="text-center">
          <h1
            className="text-2xl font-bold mb-4"
            style={{ color: EARTH_BROWN }}
          >
            Admin Login
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full border rounded-lg px-4 py-2 mb-4"
            style={{ borderColor: SUNFLOWER_ACCENT, color: EARTH_BROWN }}
          />
          <button
            onClick={handleLogin}
            className="w-full py-2 rounded-lg text-white font-bold"
            style={{ backgroundColor: LUSH_GREEN }}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const handleEdit = (id: number, field: string, value: string) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="p-4" style={{ backgroundColor: CREAM_NEUTRAL }}>
      <h1 className="text-2xl font-bold mb-4" style={{ color: EARTH_BROWN }}>
        Admin Dashboard
      </h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleEdit(item.id, "name", e.target.value)}
                  className="w-full border border-gray-300 px-2 py-1"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) =>
                    handleEdit(item.id, "description", e.target.value)
                  }
                  className="w-full border border-gray-300 px-2 py-1"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  value={item.price}
                  onChange={(e) => handleEdit(item.id, "price", e.target.value)}
                  className="w-full border border-gray-300 px-2 py-1"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() =>
                    setMenuItems((prevItems) =>
                      prevItems.filter((menuItem) => menuItem.id !== item.id)
                    )
                  }
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
