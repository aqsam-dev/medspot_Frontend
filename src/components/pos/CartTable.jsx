export default function CartTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-4 border-b font-bold">Current Order</div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left bg-gray-50">
            <th className="p-3">Name</th>
            <th>Price</th>
            <th className="text-center">Qty</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3">Panadol</td>
            <td>$2.5</td>
            <td className="text-center">2</td>
            <td className="text-right">$5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}