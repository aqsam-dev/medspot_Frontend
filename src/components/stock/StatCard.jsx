export default function StatCard({ title, value, color, icon }) {
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

  const style = styles[color];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:shadow-md transition-all duration-200">

      {/* ICON */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.bg} ${style.text}`}
      >
        <span className="material-symbols-outlined text-2xl">
          {icon}
        </span>
      </div>

      {/* TEXT */}
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {title}
        </p>

        <p className={`text-3xl font-bold ${style.text}`}>
          {value}
        </p>
      </div>

    </div>
  );
}