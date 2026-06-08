export default function ReservationStats() {
  const stats = [
    {
      title: "Today's Earnings",
      value: "PKR 2,556",
      icon: "payments",
      type: "blue",
    },
    {
      title: "Active Reservations",
      value: "07",
      icon: "assignment",
      type: "orange",
    },
    {
      title: "Pending Pickup",
      value: "12",
      icon: "pending_actions",
      type: "red", // ✅ match stock (not pink)
    },
    {
      title: "Avg. Processing",
      value: "14 mins",
      icon: "schedule",
      type: "indigo", // ✅ match stock (not purple)
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((item, i) => {
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