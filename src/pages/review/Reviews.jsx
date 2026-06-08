import MainLayout from "../../components/layout/MainLayout";

export default function Reviews() {
  return (
    <MainLayout
      headerProps={{
        title: "Reviews & Ratings",
        subtitle: "See what your customers are saying about your pharmacy",
      }}
    >

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">

        {/* LEFT - RATING OVERVIEW */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12">
          
          {/* Average */}
          <div className="flex flex-col items-center justify-center md:border-r border-slate-100 md:pr-12">
            <p className="text-xs font-bold text-slate-400 mb-4 uppercase">Average Rating</p>
            <div className="text-6xl font-black">4.6</div>

            <div className="flex mt-3 gap-0.5">
              {Array(4).fill().map((_, i) => (
                <span key={i} className="material-symbols-outlined text-amber-400">star</span>
              ))}
              <span className="material-symbols-outlined text-slate-300">star</span>
            </div>

            <p className="text-xs text-slate-400 mt-4">
              Total Reviews: <span className="text-black font-semibold">267</span>
            </p>
          </div>

          {/* Breakdown */}
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-400 mb-6 uppercase">Rating Breakdown</p>

            {[5,4,3,2,1].map((r, i) => (
              <div key={r} className="flex items-center gap-4 mb-3">
                <span className="text-xs w-4">{r}</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${[70,20,6,3,1][i]}%` }} />
                </div>
                <span className="text-xs w-8 text-right">{[70,20,6,3,1][i]}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - SENTIMENT */}
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col">
          <h2 className="font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">insights</span>
            Sentiment Analysis
          </h2>

          <div className="flex flex-wrap gap-2 mb-auto">
            <span className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600">Quick Service</span>
            <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-600">Polite Staff</span>
            <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-600">Reliable</span>
          </div>

          <div className="mt-8 pt-6 border-t border-blue-100 flex justify-between">
            <span className="text-sm text-slate-500">Overall Sentiment</span>
            <span className="text-sm font-bold text-green-500">92% Positive</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex gap-8">

        {/* FILTERS */}
        <div className="w-64">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 sticky top-8">
            <h3 className="font-bold text-sm text-primary mb-6">Filters</h3>

            <input
              placeholder="Search reviews..."
              className="w-full mb-6 px-3 py-2 text-sm border rounded-xl"
            />

            <div>
              <p className="text-xs text-slate-400 mb-2">Rating</p>
              {[5,4,3].map(r => (
                <div key={r} className="text-sm mb-2">{r} Stars</div>
              ))}
            </div>
          </div>
        </div>

        {/* REVIEWS LIST */}
        <div className="flex-1">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Customer Reviews</h2>
            <button className="bg-primary text-white p-2 rounded-full">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100">
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="font-bold text-sm">Ahmed Raza</h4>
                </div>
                <span className="text-xs text-slate-400">Nov 10</span>
              </div>

              <p className="text-sm text-slate-600 mb-4">
                Quick service, polite pharmacist. Everything was available.
              </p>

              <div className="flex justify-between text-xs">
                <button className="text-primary">Reply</button>
                <button className="text-red-400">Flag</button>
              </div>
            </div>

            {/* MORE CARDS SAME STRUCTURE */}
            
          </div>

        </div>
      </div>

    </MainLayout>
  );
}