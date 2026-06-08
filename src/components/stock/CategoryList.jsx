export default function CategoryList() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">

      <h3 className="text-lg font-bold text-gray-400 uppercase mb-6">
        Categories
      </h3>

      <div className="space-y-2">

        <button className="w-full flex justify-between px-4 py-3 rounded-xl bg-blue-600 text-white text-base">
          All Medicines <span>120</span>
        </button>

        <button className="w-full flex justify-between px-4 py-3 rounded-xl hover:bg-gray-100 text-base">
          Analgesics <span>42</span>
        </button>

        <button className="w-full flex justify-between px-4 py-3 rounded-xl hover:bg-gray-100 text-base">
          Antibiotics <span>28</span>
        </button>

         <button className="w-full flex justify-between px-4 py-3 rounded-xl hover:bg-gray-100 text-base">
          Antipyretics <span>28</span>
        </button>

         <button className="w-full flex justify-between px-4 py-3 rounded-xl hover:bg-gray-100 text-base">
          Antivirals <span>28</span>
        </button>

         <button className="w-full flex justify-between px-4 py-3 rounded-xl hover:bg-gray-100 text-base">
          Cardiovascular <span>28</span>
        </button>


      </div>

    </div>
  );
}