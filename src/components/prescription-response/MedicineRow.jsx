export default function MedicineRow({
  data,
  index,
  onChange,
  onDelete,
}) {
  return (
    <div className="border rounded-xl p-4">

      {/* Main Row */}
      <div className="grid grid-cols-12 gap-3">

        <input
          value={data.medicine_name}
          onChange={(e) =>
            onChange(index, "medicine_name", e.target.value)
          }
          placeholder="Medicine Name"
          className="col-span-4 border rounded p-2"
        />

        <select
          value={data.status}
          onChange={(e) =>
            onChange(index, "status", e.target.value)
          }
          className="col-span-3 border rounded p-2"
        >
          <option value="available">Available</option>
          <option value="alternative">Alternative</option>
          <option value="unavailable">Not Available</option>
        </select>

        <input
          type="number"
          value={data.quantity}
          onChange={(e) =>
            onChange(index, "quantity", e.target.value)
          }
          placeholder="Qty"
          className="col-span-2 border rounded p-2"
        />

        <input
          type="number"
          value={data.price}
          onChange={(e) =>
            onChange(index, "price", e.target.value)
          }
          placeholder="Price"
          className="col-span-2 border rounded p-2"
        />

        <button
          onClick={() => onDelete(index)}
          className="col-span-1 text-red-500 font-bold"
        >
          ✕
        </button>
      </div>

      {data.status === "alternative" && (
        <div className="mt-3">
          <label className="block text-xs text-gray-500 mb-1">
            Alternative Medicine
          </label>

          <input
            value={data.alternative_medicine || ""}
            onChange={(e) =>
              onChange(
                index,
                "alternative_medicine",
                e.target.value
              )
            }
            placeholder="e.g. Calpol 500mg"
            className="w-full border rounded-lg p-2 bg-yellow-50"
          />
        </div>
      )}
    </div>
  );
}