import Layout from "../../components/layout/MainLayout";
import ReservationStats from "../../components/reservations/ReservationStats";
import ReservationTable from "../../components/reservations/ReservationTable";
import ReservationFilters from "../../components/reservations/ReservationFilters";

export default function Reservations() {
  return (
    <Layout
      headerProps={{
        title: "Reservations",
        subtitle: "Manage all active and pending orders",
      }}
    >
      {/* Stats */}
      <ReservationStats />

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1">
          <ReservationTable />
        </div>

        <div className="w-full lg:w-72">
          <ReservationFilters />
        </div>

      </div>
    </Layout>
  );
}