import StockItem from "./StockItem";

export default function StockSection() {
  return (
    <div className="bg-white p-8 rounded-2xl drop-shadow-md  border border-slate-100 mb-10">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="font-bold text-2xl gap-2">
            Stock Monitoring and Update
          </h2>
          <p className="text-base text-slate-400">
            Last Inventory Check: 10 mins ago
          </p>
        </div>

        <button className="text-xl font-semibold text-primary bg-blue-50 px-4 py-2 rounded-lg">
          View All Inventory
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Critical */}
        <div>
          <h3 className="text-xl font-bold text-red-500 mb-5">
            CRITICAL ALERTS
          </h3>

          <div className="space-y-4">
            <StockItem name="Panadol 500mg" quantity="5 units left" type="low" />
            <StockItem name="Calpol Syrup" quantity="0 units left" type="out" />
          </div>
        </div>

        {/* Restocked */}
        <div>
          <h3 className="text-xl font-bold text-emerald-500 mb-5">
            NEWLY RESTOCKED
          </h3>

          <div className="space-y-4">
            <StockItem name="Brufen 400mg" quantity="+100 units" type="new" />
            <StockItem name="Disprin 300mg" quantity="+50 units" type="restock" />
          </div>
        </div>

      </div>
    </div>
  );
}