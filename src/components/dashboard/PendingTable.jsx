import React from "react";

export default function PendingTable() {
  return (
    <div className="bg-white rounded-2xl drop-shadow-md border border-slate-100 overflow-hidden">

      {/* Header */}
      <div className="p-8 border-b border-slate-50 flex justify-between items-center">
        <h2 className="font-bold text-2xl flex items-center gap-2">
           Pending Actions
        </h2>

        <span className="text-[13px] font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full uppercase tracking-widest">
          3 Items in Queue
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-left">
              <th className="text-[14px] text-slate-400 px-8 py-5">Request / Item</th>
              <th className="text-[14px] text-slate-400 px-8 py-5">Status</th>
              <th className="text-[14px] text-slate-400 px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">

            {/* Row 1 */}
            <tr className="hover:bg-slate-50/30 transition">
              <td className="px-8 py-6">
                <p className="text-lg font-bold">Order #5670</p>
                <p className="text-base text-slate-400 mt-1">25 minutes ago</p>
              </td>

              <td className="px-8 py-6">
                <span className="text-[13px] font-bold text-red-600 bg-red-50 px-4 py-1.5 rounded-lg border border-red-100">
                  EXPIRED
                </span>
              </td>

              <td className="px-8 py-6 text-right">
                <span className="text-sm text-red-400 italic">
                  Expired 20 mins ago
                </span>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-slate-50/30 transition">
              <td className="px-8 py-6">
                <p className="text-lg font-bold">Order #5679</p>
                <p className="text-base text-slate-400 mt-1">5 minutes ago</p>
              </td>

              <td className="px-8 py-6">
                <span className="text-[13px] font-bold text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                  PENDING
                </span>
              </td>

              <td className="px-8 py-6 text-right">
                <span className="text-sm text-slate-400 italic">
                  Waiting for pickup
                </span>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-slate-50/30 transition">
              <td className="px-8 py-6">
                <p className="text-lg font-bold">Order #5678</p>
                <p className="text-base text-slate-400 mt-1">15 minutes ago</p>
              </td>

              <td className="px-8 py-6">
                <span className="text-[13px] font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                  COMPLETED
                </span>
              </td>

              <td className="px-8 py-6 text-right">
                <span className="text-sm text-slate-400 italic">
                  Processed successfully
                </span>
              </td>
            </tr>

          </tbody>
        </table>

        {/* Footer */}
        <div className="p-6 bg-slate-50/30 text-center border-t border-slate-50">
          <button className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest">
            See All Pending Requests
          </button>
        </div>
      </div>
    </div>
  );
}