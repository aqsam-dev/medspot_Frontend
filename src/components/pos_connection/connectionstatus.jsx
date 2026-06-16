import { useState } from "react";

export default function ConnectionStatus({
  status,
  onSync,
  onTest,
  onSaveConnection,
}) {
  const [baseUrl, setBaseUrl] = useState(status.base_url || "");
  const [apiKey, setApiKey] = useState(status.api_key || "");

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-semibold">
        POS Integration
      </h2>

      <p className="text-gray-500 mb-6">
        Configure your pharmacy POS connection.
      </p>

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-medium mb-2">
            POS Base URL
          </label>

          <input
            type="text"
            value={baseUrl}
            onChange={(e) =>
              setBaseUrl(e.target.value)
            }
            placeholder="http://192.168.1.100:4000"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            API Key (Optional)
          </label>

          <input
            type="text"
            value={apiKey}
            onChange={(e) =>
              setApiKey(e.target.value)
            }
            placeholder="API Key"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          onClick={() =>
            onSaveConnection({
              base_url: baseUrl,
              api_key: apiKey,
            })
          }
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Save Connection
        </button>
      </div>

      <hr className="my-6" />

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            Connection Status
          </p>

          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full ${status.connected
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
              }`}
          >
            {status.connected
              ? "Connected"
              : "Disconnected"}
          </span>

        </div>

        <div className="text-right">

          <p>
            <strong>POS Vendor:</strong>{" "}
            {status.vendor}
          </p>

          <p>
            <strong>Last Sync:</strong>{" "}
            {status.last_sync}
          </p>

        </div>

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