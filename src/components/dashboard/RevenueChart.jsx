import BarChartIcon from "@mui/icons-material/BarChart";

export default function RevenueChart({
    revenue = []
}) {
    const maxRevenue = Math.max(
        ...revenue.map((item) =>
            Number(item.revenue)
        ),
        1
    );

    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-100">

            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-bold flex items-center gap-2 text-2xl">
                    <BarChartIcon className="text-primary text-2xl" />
                    Revenue (Last 7 Days)
                </h2>

                <span className="text-xs border border-slate-200 rounded-lg px-3 py-1">
                    {revenue.length} Days
                </span>
            </div>

            {/* Empty State */}
            {revenue.length === 0 ? (
                <div className="h-36 flex items-center justify-center text-slate-400">
                    No revenue data available.
                </div>
            ) : (
                <>
                    {/* Bars */}
                    <div className="flex items-end justify-between h-44 gap-2">

                        {revenue.map(
                            (item, index) => {
                                const value =
                                    Number(
                                        item.revenue
                                    );

                                const height =
                                    (value /
                                        maxRevenue) *
                                    100;

                                return (
                                    <div
                                        key={
                                            item.date
                                        }
                                        className="
                                            flex
                                            flex-col
                                            items-center
                                            flex-1
                                        "
                                    >
                                        {/* Revenue Amount */}
                                        <span className="text-[10px] text-slate-500 mb-1">
                                            Rs {value}
                                        </span>

                                        {/* Bar */}
                                        <div
                                            className={`
                                                w-full
                                                rounded-t-lg
                                                transition-all
                                                cursor-pointer
                                                ${
                                                    index ===
                                                    revenue.length -
                                                        1
                                                        ? "bg-primary shadow-md shadow-blue-500/20"
                                                        : "bg-primary/50 hover:bg-primary/70"
                                                }
                                            `}
                                            style={{
                                                height: `${height}%`,
                                                minHeight:
                                                    "10px",
                                            }}
                                        />

                                        {/* Date */}
                                        <span className="text-[10px] text-slate-400 font-semibold tracking-widest mt-2">
                                            {new Date(
                                                item.date
                                            ).toLocaleDateString(
                                                "en-US",
                                                {
                                                    month:
                                                        "short",
                                                    day: "numeric",
                                                }
                                            )}
                                        </span>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </>
            )}
        </div>
    );
}