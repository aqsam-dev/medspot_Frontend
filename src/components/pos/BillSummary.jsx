export default function BillSummary() {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm">
      <h3 className="font-bold mb-4">Bill Summary</h3>

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>$29.60</span>
      </div>

      <div className="flex justify-between mb-4">
        <span>Tax</span>
        <span>$3.55</span>
      </div>

      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span className="text-blue-600">$33.15</span>
      </div>
    </div>
  );
}