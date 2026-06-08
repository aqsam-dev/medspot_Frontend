export default function ReservationTable() {
  const data = [
    {
      id: "#1098",
      name: "Aqsam Shahid",
      qty: "2 Packs",
      time: "Completed",
      timeType: "completed",
      status: "Completed",
      statusType: "completed",
    },
    {
      id: "#1099",
      name: "Mahnoor Ijaz",
      qty: "4 Packs",
      time: "5 mins left",
      timeType: "active",
      status: "Completed",
      statusType: "completed",
    },
    {
      id: "#2090",
      name: "Malayka Meer",
      qty: "13 Packs",
      time: "Overdue",
      timeType: "overdue",
      status: "Pending",
      statusType: "pending",
    },
  ];

  const statusStyles = {
    completed: "bg-green-50 text-green-600",
    pending: "bg-yellow-50 text-yellow-600",
    expired: "bg-red-50 text-red-600",
  };

  const dotStyles = {
    completed: "bg-green-500",
    pending: "bg-yellow-500",
    expired: "bg-red-500",
  };

  const timeStyles = {
    completed: "text-slate-400",
    active: "text-blue-600 font-semibold",
    overdue: "text-red-500 font-bold",
  };

  const timeIcons = {
    completed: "check_circle",
    active: "timer",
    overdue: "warning",
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

      {/* HEADER */}
      <div className="p-5 border-b border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-sm font-bold text-slate-900">
            Live Reservations
          </h2>

          <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded uppercase tracking-wider">
            Update 2m ago
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400">
            Sort:
          </span>

          <div className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold cursor-pointer">
            Latest Token ID
            <span className="material-symbols-outlined text-sm">
              expand_more
            </span>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">

          {/* HEAD */}
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                Token ID
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider text-center">
                Quantity
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                Remaining Time
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-[10px] font-bold text-blue-600 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y divide-slate-100">
            {data.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-5 text-sm font-bold text-slate-900">
                  {row.id}
                </td>

                <td className="px-6 py-5 text-sm font-medium text-slate-700">
                  {row.name}
                </td>

                <td className="px-6 py-5 text-sm text-slate-600 text-center">
                  {row.qty}
                </td>

                {/* TIME */}
                <td className="px-6 py-5 text-sm">
                  <span
                    className={`flex items-center gap-1.5 ${timeStyles[row.timeType]}`}
                  >
                    <span className="material-symbols-outlined text-base">
                      {timeIcons[row.timeType]}
                    </span>
                    {row.time}
                  </span>
                </td>

                {/* STATUS */}
                <td className="px-6 py-5">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 w-fit ${statusStyles[row.statusType]}`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${dotStyles[row.statusType]}`}
                    ></div>
                    {row.status}
                  </div>
                </td>

                {/* ACTION */}
                <td className="px-6 py-5 text-right">
                  <button className="text-[11px] font-bold text-blue-600 hover:underline">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="p-5 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
        <p className="text-xs text-slate-400 font-medium">
          Showing 1 to 4 of 45 reservations
        </p>

        <div className="flex items-center gap-1">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white">
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow">
            1
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 text-xs font-bold hover:bg-white">
            2
          </button>

          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}