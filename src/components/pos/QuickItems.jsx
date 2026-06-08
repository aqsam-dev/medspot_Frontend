const items = [
  { name: "Panadol CF", price: "$2.50" },
  { name: "Disprin", price: "$1.80" },
  { name: "Amoxicillin", price: "$12.00" },
  { name: "Strepsils", price: "$5.40" },
];

export default function QuickItems() {
  return (
    <div>
      <div className="flex justify-between mb-3">
        <h3 className="font-bold">Quick Selection</h3>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {items.map((item, i) => (
          <button
            key={i}
            className="p-4 bg-white border rounded-xl hover:border-blue-500"
          >
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-blue-600">{item.price}</p>
          </button>
        ))}
      </div>
    </div>
  );
}