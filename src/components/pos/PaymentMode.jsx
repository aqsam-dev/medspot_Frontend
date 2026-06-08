export default function PaymentActions() {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm space-y-3">

      <div className="grid grid-cols-2 gap-3">
        <button className="border p-3 rounded-xl">
          Print Bill
        </button>

        <button className="border p-3 rounded-xl">
          Hold Order
        </button>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
        Complete Payment
      </button>

    </div>
  );
}