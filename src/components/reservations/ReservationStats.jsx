export default function ReservationStats({ stats }) {

  const cards = [
    {
        title: "Today's Earnings",
        value: `PKR ${stats.todayRevenue}`,
        icon: "payments",
        type: "blue",
    },
    {
        title: "Active Reservations",
        value: stats.activeReservations,
        icon: "assignment",
        type: "orange",
    },
    {
        title: "Pending Pickup",
        value: stats.pendingReservations,
        icon: "pending_actions",
        type: "red",
    },
    {
        title: "Avg. Processing",
        value: stats.averageProcessingTime,
        icon: "schedule",
        type: "indigo",
    },
];

  const styles = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-600",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
    },
  };
  
  if (!stats) {
    return null;
}

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {cards.map((item, i) => {
        const style = styles[item.type];

        return (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-all duration-200"
          >
            {/* ICON */}
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.bg} ${style.text}`}
            >
              <span className="material-symbols-outlined text-2xl">
                {item.icon}
              </span>
            </div>

            {/* TEXT */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {item.title}
              </p>

              <p className={`text-3xl font-bold ${style.text}`}>
                {item.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}