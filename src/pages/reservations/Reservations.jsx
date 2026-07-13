import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../../components/layout/MainLayout";
import ReservationStats from "../../components/reservations/ReservationStats";
import ReservationTable from "../../components/reservations/ReservationTable";
import ReservationFilters from "../../components/reservations/ReservationFilters";

export default function Reservations() {

  const navigate = useNavigate();

const [showAddStaff, setShowAddStaff] = useState(false);

const [reservations, setReservations] = useState([]);
const [stats, setStats] = useState(null);

const [status, setStatus] = useState("all");
const [search, setSearch] = useState("");
const [sort, setSort] = useState("latest");

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");


const fetchReservations = async () => {
  try {
    setLoading(true);

    const res = await fetch(
      `/api/admin/reservations?page=${page}&status=${status}&search=${search}&sort=${sort}`
    );

    const data = await res.json();

    setReservations(data.reservations);
    setStats(data.stats);
    setTotalPages(data.totalPages);

  } catch (err) {
    setError("Failed to load reservations");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
    fetchReservations();
}, [page, status, search, sort]);

  return (

    <Layout
      headerProps={{
        title: "Reservations",
        subtitle: "Manage all active and pending orders",

        extra: (
          <>
            <button
              onClick={() => setShowAddStaff(true)}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-sm"
            >
              + Add Staff
            </button>

            <button
              onClick={() => navigate("/manage-staff")}
              className="px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition font-semibold text-slate-700"
            >
              Manage Staff
            </button>
          </>
        )
      }}
    >

 <ReservationStats
    stats={stats}
/>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex-1">
       <ReservationTable
    reservations={reservations}
    loading={loading}
    page={page}
    totalPages={totalPages}
    setPage={setPage}
    fetchReservations={fetchReservations}
/>
        </div>

        <div className="w-full lg:w-72">
        <ReservationFilters
    status={status}
    setStatus={setStatus}
    stats={stats}
/>
        </div>

      </div>

      {/* Add Staff Modal Here Later */}

    </Layout>

  );
}