export default function MedicineTable() {
  const medicines = [
    {
      name: "Panadol",
      generic: "Paracetamol",
      qty: 15,
      expiry: "10/2025",
      status: "out",
    },
    {
      name: "Augmentin",
      generic: "Amoxicillin",
      qty: 39,
      expiry: "03/2026",
      status: "low",
    },
    {
      name: "Brufen",
      generic: "Ibuprofen",
      qty: 53,
      expiry: "04/2026",
      status: "low",
    },
    {
      name: "Trika",
      generic: "Trika",
      qty: 150,
      expiry: "06/2026",
      status: "in",
    },
    {
      name: "Aspirin",
      generic: "Acetylsalicylic Acid",
      qty: 240,
      expiry: "08/2027",
      status: "in",
    },
    {
      name: "Voltaren",
      generic: "Diclofenac Sodium",
      qty: 89,
      expiry: "09/2028",
      status: "in",
    },
  ];

  const statusStyles = {
    out: "text-red-600 bg-red-50",
    low: "text-amber-600 bg-amber-50",
    in: "text-emerald-600 bg-emerald-50",
  };

  const statusText = {
    out: "Out of Stock",
    low: "Low Stock",
    in: "In Stock",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="font-bold text-lg">Medicine List</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          {/* Head */}
          <thead>
            <tr className="text-xs font-bold text-gray-400 uppercase border-b">
              <th className="px-6 py-4 text-left text-primary">
                Medicine Name
              </th>
              <th className="px-6 py-4 text-left">
                Generic Name
              </th>
              <th className="px-6 py-4 text-left">
                Quantity
              </th>
              <th className="px-6 py-4 text-left">
                Expiry Date
              </th>
              <th className="px-6 py-4 text-left">
                Status
              </th>
              <th className="px-6 py-4 text-right">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y">

            {medicines.map((med, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition"
              >
                {/* Name */}
                <td className="px-6 py-5 font-bold text-sm">
                  {med.name}
                </td>

                {/* Generic */}
                <td className="px-6 py-5 text-sm text-gray-500">
                  {med.generic}
                </td>

                {/* Quantity */}
                <td
                  className={`px-6 py-5 text-sm font-bold ${
                    med.status === "out"
                      ? "text-red-600"
                      : med.status === "low"
                      ? "text-amber-600"
                      : ""
                  }`}
                >
                  {med.qty}
                </td>

                {/* Expiry */}
                <td className="px-6 py-5 text-sm text-gray-500 font-medium">
                  {med.expiry}
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex items-center gap-2 text-[10px] font-bold px-3 py-1 rounded-full uppercase ${statusStyles[med.status]}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        med.status === "out"
                          ? "bg-red-600"
                          : med.status === "low"
                          ? "bg-amber-600"
                          : "bg-emerald-600"
                      }`}
                    ></span>
                    {statusText[med.status]}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-5 text-right">
                  <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1 justify-end">
                    <span className="material-symbols-outlined text-base">
                      visibility
                    </span>
                    Details
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-6 bg-gray-50 flex justify-between items-center border-t">
        <p className="text-xs text-gray-500">
          Showing 1 to 6 of 120 medicines
        </p>

        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-white">
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>

          <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">
            1
          </button>

          <button className="w-8 h-8 rounded-lg hover:bg-white text-xs font-bold">
            2
          </button>

          <button className="w-8 h-8 rounded-lg hover:bg-white text-xs font-bold">
            3
          </button>

          <button className="p-2 rounded-lg hover:bg-white">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}