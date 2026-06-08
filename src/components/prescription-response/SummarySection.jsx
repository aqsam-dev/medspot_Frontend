export default function SummarySection({ medicines }) {
  const total = medicines.reduce((sum, item) => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.price) || 0;

    return sum + qty * price;
  }, 0);

  return (
    <div className="bg-white p-6 rounded-2xl border shadow-sm">
      <div className="flex justify-between">
        <p>Total</p>

        <p className="text-blue-600 font-bold text-xl">
          Rs {total.toFixed(2)}
        </p>
      </div>
    </div>
  );
}