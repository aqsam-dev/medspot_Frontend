import Header from "../../components/layout/Header";

export default function POSIntegration() {
  return (
    <>
      <Header
        title="POS Integration"
        subtitle="Connect MedSpot with your POS"
      />

      <div className="bg-white rounded-xl p-6 shadow">

        <div className="space-y-3">

          <p>
            Integration Level:
            <span className="font-semibold text-green-600 ml-2">
              Level 2
            </span>
          </p>

          <p>
            Last Sync:
            <span className="ml-2">
              2 minutes ago
            </span>
          </p>

          <p>
            Status:
            <span className="text-green-600 ml-2">
              Connected
            </span>
          </p>

        </div>

        <div className="mt-6 flex gap-3">

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Test Connection
          </button>

          <button className="px-4 py-2 border rounded-lg">
            Sync Inventory
          </button>

        </div>

      </div>
    </>
  );
}