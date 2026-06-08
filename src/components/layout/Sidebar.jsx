import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: "dashboard", path: "/dashboard" },
  { name: "Inventory", icon: "inventory_2", path: "/stock" },
  { name: "Reservations", icon: "event_note", path: "/reservation" },
  { name: "Prescriptions", icon: "receipt_long", path: "/prescription" },
  { name: "Reviews", icon: "rate_review", path: "/reviews" },
];

export default function Sidebar() {

  const pharmacy = JSON.parse(
    localStorage.getItem("pharmacyData")
  );

  return (
    <aside className="w-64 fixed h-full bg-gray-50 border-r flex flex-col z-20">

      {/* Logo */}
      <div className="px-6 py-8 flex items-center gap-3 font-bold">
        <div className="bg-blue-600 p-2 rounded-xl text-white font-bold">
          <span className="material-symbols-outlined">
            medical_services
          </span>
        </div>

        <span className="text-2xl font-bold">
          {pharmacy?.pharmacy_name || "MedSpot"}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-lg font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-500 hover:bg-gray-200"
              }`
            }
          >
            <span className="material-symbols-outlined text-xl">
              {item.icon}
            </span>
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}