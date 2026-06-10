export default function ConnectionStatus({
  status,
  onSync,
  onTest,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <div className="flex justify-between">

        <div>
          <h2 className="text-xl font-semibold">
            POS Connection
          </h2>

          <p className="text-gray-500">
            Current Integration Status
          </p>
        </div>

        <span
          className={`px-4 py-2 rounded-full ${
            status.connected
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.connected
            ? "Connected"
            : "Disconnected"}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <Info
          label="Integration Level"
          value={status.integration_level}
        />

        <Info
          label="Last Sync"
          value={status.last_sync}
        />

        <Info
          label="POS Vendor"
          value={status.vendor}
        />

      </div>

      <div className="flex gap-3 mt-6">

        <button
          onClick={onTest}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Test Connection
        </button>

        <button
          onClick={onSync}
          className="border px-4 py-2 rounded-lg"
        >
          Sync Inventory
        </button>

      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-semibold">
        {value}
      </p>
    </div>
  );
}