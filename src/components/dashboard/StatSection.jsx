// src/components/dashboard/StatSection.jsx

import StatCard from "./StatsCard";

export default function StatSection() {
  return (
    <div className="bg-white p-6 rounded-2xl drop-shadow-md border border-slate-100">

      <h1 className="font-bold text-2xl ">Today's Status</h1>

      <div className="grid grid-cols-2 gap-4">

        <StatCard title="Total Reservations" value="09" />
        <StatCard title="Active Orders" value="03" />
        <StatCard title="Completed Orders" value="07" />

        {/* Revenue special */}
        <div className="p-5 rounded-xl bg-blue-50 border border-blue-100">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
            Total Revenue
          </p>
          <p className="text-3xl font-bold text-primary">
            Rs. 26,000
          </p>
        </div>

      </div>
    </div>
  );
}