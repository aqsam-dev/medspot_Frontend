import MainLayout from "../../components/layout/MainLayout";
import PendingTable from "../../components/dashboard/PendingTable";
import RevenueChart from "../../components/dashboard/RevenueChart";
import StatSection from "../../components/dashboard/StatSection";
import StocksSection from "../../components/dashboard/StocksSection";

export default function Dashboard() {
  return (
    <MainLayout
      headerProps={{
        title: "Dashboard",
        subtitle: "Overview of your pharmacy",
      }}
    >

      {/* Stats + Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <StatSection />
        <RevenueChart />
      </div>

      {/* Stock Monitoring */}
      <StocksSection />

      {/* Pending Actions */}
      <PendingTable />

    </MainLayout>
  );
}