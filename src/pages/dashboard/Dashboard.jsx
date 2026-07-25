import { useEffect, useState } from "react";

import MainLayout from "../../components/layout/MainLayout";
import RevenueChart from "../../components/dashboard/RevenueChart";
import StatSection from "../../components/dashboard/StatSection";
import RecentActivity from "../../components/dashboard/RecentActivity";

import axios from "axios";

export default function Dashboard() {
    const [stats, setStats] = useState({
    totalReservations: 0,
    activeReservations: 0,
    completedReservations: 0,
    cancelledReservations: 0,
    expiredReservations: 0,
    todayRevenue: 0,
});
    const [activities, setActivities] = useState([]);
    const [revenueChart, setRevenueChart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const [
                statsRes,
                activityRes,
                revenueRes
            ] = await Promise.all([
                axios.get(
                    "/api/pharmacy-dashboard/stats"
                ),
                axios.get(
                    "/api/pharmacy-dashboard/recent-activity"
                ),
                axios.get(
                    "/api/pharmacy-dashboard/revenue-chart"
                ),
            ]);

            setStats(statsRes.data.stats);

            setActivities(
                activityRes.data.data
            );

            setRevenueChart(
                revenueRes.data.data
            );

        } catch (err) {

            console.log(
                "Dashboard Error:",
                err
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <MainLayout
            headerProps={{
                title: "Dashboard",
                subtitle:
                    "Overview of your pharmacy",
            }}
        >
            <div
                className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                    mb-10
                "
            >
                <StatSection
                    stats={stats}
                />

                <RevenueChart
                    revenue={revenueChart}
                />
            </div>

            <RecentActivity
                activities={activities}
                loading={loading}
            />
        </MainLayout>
    );
}