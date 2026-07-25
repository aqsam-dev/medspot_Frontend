import StatCard from "./StatsCard";

export default function StatSection({
    stats = {
        totalReservations: 0,
        activeReservations: 0,
        completedReservations: 0,
        cancelledReservations: 0,
        expiredReservations: 0,
        todayRevenue: 0,
    },
}) {
    return (
        <div className="bg-white p-6 rounded-2xl drop-shadow-md border border-slate-100">

            <h1 className="font-bold text-2xl mb-6">
                Today's Status
            </h1>

            <div className="grid grid-cols-2 gap-4">

                <StatCard
                    title="Total Reservations"
                    value={
                        stats.totalReservations
                    }
                />

                <StatCard
                    title="Active Orders"
                    value={
                        stats.activeReservations
                    }
                />

                <StatCard
                    title="Completed Orders"
                    value={
                        stats.completedReservations
                    }
                />

                <StatCard
                    title="Cancelled Orders"
                    value={
                        stats.cancelledReservations
                    }
                />

                <StatCard
                    title="Expired Orders"
                    value={
                        stats.expiredReservations
                    }
                />

                {/* Revenue Card */}
                <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 flex flex-col justify-center">
                    <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">
                        Today's Revenue
                    </p>

                    <p className="text-3xl font-bold text-primary">
                        Rs.{" "}
                        {Number(
                            stats.todayRevenue
                        ).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
}