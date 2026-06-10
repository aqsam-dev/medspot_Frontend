import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  Moon,
  Sun,
  ChevronDown,
  LogOut,
  Settings,
  Building2,
  Link as LinkIcon,
  CircleHelp,
} from "lucide-react";

export default function Header({
  title,
  subtitle,
  extra,
}) {
  const navigate = useNavigate();

  const pharmacy = JSON.parse(
    localStorage.getItem("pharmacyData") || "{}"
  );

  const [showMenu, setShowMenu] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const unreadNotifications = 3; // replace with API later

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    function handleOutsideClick() {
      setShowMenu(false);
    }

    if (showMenu) {
      document.addEventListener(
        "click",
        handleOutsideClick
      );
    }

    return () => {
      document.removeEventListener(
        "click",
        handleOutsideClick
      );
    };
  }, [showMenu]);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("pharmacyData");

    window.location.href = "/";
  }

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  function navigateTo(path) {
    setShowMenu(false);
    navigate(path);
  }

  return (
    <header className="flex justify-between items-center mb-10">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          {title}
        </h1>

        <p className="text-gray-500 text-sm mt-1">
          {subtitle}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {extra}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-xl border bg-white hover:bg-gray-100 flex items-center justify-center transition shadow-sm"
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Notifications */}
        <button
          onClick={() => navigate("/notifications")}
          className="relative w-10 h-10 rounded-xl border bg-white hover:bg-gray-100 flex items-center justify-center transition shadow-sm"
        >
          <Bell size={18} />

          {unreadNotifications > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center px-1">
              {unreadNotifications}
            </span>
          )}
        </button>

        {/* Profile Dropdown */}
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() =>
              setShowMenu(!showMenu)
            }
            className="flex items-center gap-3 border-l pl-6"
          >
            <div className="text-right">
              <p className="text-sm font-semibold">
                {pharmacy?.owner_name}
              </p>

              <p className="text-xs text-gray-500">
                {pharmacy?.pharmacy_name}
              </p>

              <p className="text-[11px] text-green-600 font-medium">
                ● POS Connected
              </p>
            </div>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold border">
              {pharmacy?.pharmacy_name?.[0]?.toUpperCase() ||
                "P"}
            </div>

            <ChevronDown size={16} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-3 w-64 bg-white border rounded-2xl shadow-xl overflow-hidden z-50">
              {/* User Info */}
              <div className="px-4 py-4 border-b bg-gray-50">
                <p className="font-semibold text-sm">
                  {pharmacy?.owner_name}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {pharmacy?.owner_email}
                </p>

                <div className="mt-2 text-xs font-medium text-green-600">
                  ● Connected to MedSpot
                </div>
              </div>

              {/* Menu */}

              <button
                onClick={() =>
                  navigateTo("/profile")
                }
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm text-left"
              >
                <Building2 size={16} />
                Pharmacy Profile
              </button>

              <button
                onClick={() =>
                  navigateTo("/settings")
                }
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm text-left"
              >
                <Settings size={16} />
                Settings
              </button>

              <button
                onClick={() =>
                  navigateTo("/pos-integration")
                }
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm text-left"
              >
                <LinkIcon size={16} />
                POS Integration
              </button>

              <button
                onClick={() =>
                  navigateTo("/notifications")
                }
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm text-left"
              >
                <Bell size={16} />
                Notifications
              </button>

              <button
                onClick={() =>
                  navigateTo("/help")
                }
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-sm text-left"
              >
                <CircleHelp size={16} />
                Help Center
              </button>

              <div className="border-t" />

              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 text-red-600 text-sm text-left"
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