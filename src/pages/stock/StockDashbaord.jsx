import MainLayout from "../../components/layout/MainLayout";
import CategoryList from "../../components/stock/CategoryList";
import MedicineTable from "../../components/stock/MedicineTable";
import StatCard from "../../components/stock/StatCard";

export default function Stock() {
  return (
    <MainLayout
      headerProps={{
        title: "Stock Management",
        subtitle: "Monitor and manage your inventory",
      }}
    >

      {/* 🔹 ACTION BAR */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        {/* Search */}
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Search medicine..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition"
          />
        </div>

        {/* Button */}
        <button className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all">
          <span className="material-symbols-outlined">add</span>
          Add Medicine
        </button>

      </div>

      {/* 🔹 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Medicine" value="120" color="blue" icon="inventory" />
        <StatCard title="Low Stock" value="05" color="orange" icon="warning" />
        <StatCard title="Out of Stock" value="03" color="red" icon="cancel" />
        <StatCard title="Latest Update" value="08" color="indigo" icon="update" />
      </div>

      {/* 🔹 MAIN GRID */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-3">
          <CategoryList />
        </div>

        <div className="col-span-12 lg:col-span-9">
          <MedicineTable />
        </div>
      </div>

    </MainLayout>
  );
}