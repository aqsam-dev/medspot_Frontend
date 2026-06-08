export default function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm">
      <label className="text-sm font-medium mb-2 block">
        Search Medicines
      </label>

      <input
        className="w-full px-4 py-3 border rounded-xl"
        placeholder="Search Panadol, Disprin..."
      />
    </div>
  );
}