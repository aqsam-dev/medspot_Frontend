import { useState } from "react";

export default function ActivityFeed() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`fixed right-0 top-0 h-full bg-white border-l shadow-lg z-30 transition-all duration-300
        ${open ? "w-80 p-6" : "w-12 p-2"}`}
    >
      
      {/* Toggle */}
      <div className="flex justify-between items-center mb-6">
        {open && (
          <h2 className="text-sm font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-green-500">
              sensors
            </span>
            Activity Feed
          </h2>
        )}

        <button onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined text-gray-400">
            {open ? "chevron_right" : "chevron_left"}
          </span>
        </button>
      </div>

      {/* Content */}
      {open && (
        <div className="space-y-6 text-sm">

          <div>
            <p className="font-bold">New Review</p>
            <p className="text-gray-500 text-xs">
              "Great service!"
            </p>
          </div>

          <div>
            <p className="font-bold">Stock Updated</p>
            <p className="text-gray-500 text-xs">
              Brufen restocked
            </p>
          </div>

          <div>
            <p className="font-bold">New Customer</p>
            <p className="text-gray-500 text-xs">
              Zoya joined
            </p>
          </div>

        </div>
      )}
    </div>
  );
}