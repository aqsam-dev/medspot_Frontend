import BarChartIcon from "@mui/icons-material/BarChart";

export default function RevenueChart() {
  const data = [40, 55, 45, 75, 60, 85, 95, 90];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG"];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100">

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold flex items-center gap-2 text-2xl">
          <BarChartIcon className="text-primary text-2xl" />
          Monthly Revenue
        </h2>

        <select className="text-xs border border-slate-200 rounded-lg px-2 py-1 focus:ring-primary focus:border-primary">
          <option>Last 8 Months</option>
        </select>
      </div>

      {/* Bars */}
      <div className="flex items-end justify-between h-36 px-1">
        {data.map((height, index) => {
          let barColor = "";

          if (index < 4) {
            barColor = "bg-slate-100 hover:bg-primary/20";
          } else if (index === 4) {
            barColor = "bg-primary/40 hover:bg-primary/50";
          } else if (index === 5) {
            barColor = "bg-primary/60 hover:bg-primary/70";
          } else if (index === 6) {
            barColor = "bg-primary/80 hover:bg-primary/90";
          } else {
            barColor = "bg-primary shadow-md shadow-blue-500/20";
          }

          return (
            <div
              key={index}
              className={`w-12 md:w-12 rounded-t-lg transition-all cursor-pointer ${barColor}`}
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>

      {/* Months */}
      <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-semibold tracking-widest px-1">
        {months.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}