export default function ReservationFilters() {
  const filters = [
    {
      label: "All Orders",
      count: 45,
      icon: "list_alt",
      active: true,
    },
    {
      label: "Pending",
      count: 12,
      icon: "pending",
    },
    {
      label: "Confirmed",
      count: 26,
      icon: "check_circle",
    },
    {
      label: "Delivered",
      count: 7,
      icon: "local_shipping",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="p-5 border-b border-slate-100 bg-slate-50/50">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Filter by Status
        </h2>
      </div>

      {/* FILTER LIST */}
      <div className="p-2 space-y-1">
        {filters.map((item, i) => (
          <button
            key={i}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all
              ${
                item.active
                  ? "bg-slate-50 text-slate-900 font-semibold border border-slate-200"
                  : "text-slate-500 hover:bg-slate-50 font-medium"
              }`}
          >
            {/* LEFT */}
            <div className="flex items-center gap-3">
              <span
                className={`material-symbols-outlined text-lg ${
                  item.active ? "text-blue-600" : ""
                }`}
              >
                {item.icon}
              </span>

              {item.label}
            </div>

            {/* RIGHT COUNT */}
            <span
              className={`text-xs px-2 py-0.5 rounded-lg ${
                item.active
                  ? "bg-white border border-slate-200"
                  : "text-slate-400"
              }`}
            >
              {item.count}
            </span>
          </button>
        ))}
      </div>

    </div>
  );
}