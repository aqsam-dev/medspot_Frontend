import { useState } from "react";
import {
  Bell,
  Moon,
  Sun,
  ChevronDown,
  LogOut,
  Settings,
  Building2,
} from "lucide-react";

export default function Header({
  title,
  subtitle,
  extra,
}) {
  const pharmacy = JSON.parse(
    localStorage.getItem("pharmacyData")
  );

  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("pharmacyData");
    window.location.href = "/login";
  }

  function toggleTheme() {
    setDarkMode(!darkMode);

    document.documentElement.classList.toggle("dark");
  }

  return (
    <header className="flex justify-between items-center mb-10">
      {/* Left Side */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          {title}
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          {subtitle}
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {extra}

        {/* Dark Mode */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl border bg-white hover:bg-gray-100 flex items-center justify-center transition"
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Notifications */}
        <button className="relative w-10 h-10 rounded-xl border bg-white hover:bg-gray-100 flex items-center justify-center transition">
          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex items-center gap-3 border-l pl-6"
          >
            <div className="text-right">
              <p className="text-sm font-semibold">
                {pharmacy?.owner_name}
              </p>

              <p className="text-xs text-gray-500">
                {pharmacy?.pharmacy_name}
              </p>
            </div>

            <img
              className="w-10 h-10 rounded-full border"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQHBNen3qqkn8Sag78q8oHvHBUTYXDTzYjan4MLCVJCGdii0fXdaBvCbn2PZr8RXi0wbbEQlUTA3GMddyssiJA1PdjypdqagJ0ad29XxcTutpkRnLrJ5Nk7Jv21-TqPvkpaMqqifX7wJC90gQRL18TPVxJVw-BBuB3hSpYA7F1YvMEGBWpAz8wJZzxjGDKPQmfokVswprhlPny1OxIPNcmcPdP5xBf5tjirR8HV-PZfVWTeKb77fs4QwmpVpQWCXCWtk2WXFwlqQ"
              alt="user"
            />

            <ChevronDown size={16} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-3 w-60 bg-white border rounded-2xl shadow-lg overflow-hidden z-50">
              {/* User Info */}
              <div className="px-4 py-4 border-b">
                <p className="font-semibold text-sm">
                  {pharmacy?.owner_name}
                </p>

                <p className="text-xs text-gray-500">
                  {pharmacy?.owner_email}
                </p>
              </div>

              {/* Menu Items */}
              <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm">
                <Building2 size={16} />
                Pharmacy Profile
              </button>

              <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm">
                <Settings size={16} />
                Settings
              </button>

              <div className="border-t" />

              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 text-red-600 text-sm"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}