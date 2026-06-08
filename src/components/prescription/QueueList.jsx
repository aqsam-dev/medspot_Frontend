import { useEffect, useState, useCallback } from "react";
import { prescriptionAPI } from "../../services/api";

export default function QueueList({ onSelect }) {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const loadPrescriptions = useCallback(async () => {
    try {
      const res = await prescriptionAPI.getAll();

      if (res.success) {
        setData(res.data);

        if (res.data.length > 0) {
          setActiveId(res.data[0].id);
          onSelect && onSelect(res.data[0]);
        }
      }
    } catch (err) {
      console.error("Error fetching prescriptions:", err);
    }
  }, [onSelect]);

  useEffect(() => {
    loadPrescriptions();
  }, [loadPrescriptions]);

  const handleSelect = (item) => {
    setActiveId(item.id);
    onSelect && onSelect(item);
  };

  return (
    <div className="bg-white rounded-2xl border h-[calc(100vh-200px)] flex flex-col">

      {/* Header */}
      <div className="p-6 border-b flex justify-between">
        <h3 className="text-xs font-bold text-gray-400 uppercase">
          Queue ({data.length})
        </h3>
      </div>

      {/* Queue List */}
      <div className="overflow-y-auto flex-1">

        {data.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No prescriptions found
          </div>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-4 cursor-pointer border-l-4 transition ${
                activeId === item.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-transparent hover:bg-gray-50"
              }`}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">

                <span className="font-bold text-blue-600 text-sm">
                  MP-{item.prescription_no}
                </span>

                <span className="text-xs text-gray-400">
                  {new Date(item.created_at).toLocaleString()}
                </span>

              </div>

              {/* Patient Name */}
              <p className="font-semibold mt-2 text-gray-900">
                {item.name || "Unknown Patient"}
              </p>

              {/* Notes Preview */}
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {item.notes || "No notes provided"}
              </p>
            </div>
          ))
        )}

      </div>
    </div>
  );
}