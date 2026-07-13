import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AddStaffModal({
  onClose,
  onSave,
  initialData = null,
}) {
  const isEdit = !!initialData;

  const [form, setForm] = useState({
    full_name: initialData?.full_name || "",
    role: initialData?.role || "Salesman",
    phone: initialData?.phone || "",
    whatsapp: initialData?.whatsapp || "",
    receive_whatsapp:
      initialData?.receive_whatsapp ?? true,
  });

  useEffect(() => {

    setForm({

        full_name:
            initialData?.full_name || "",

        role:
            initialData?.role || "Salesman",

        phone:
            initialData?.phone || "",

        whatsapp:
            initialData?.whatsapp || "",

        receive_whatsapp:
            initialData?.receive_whatsapp ?? true

    });

}, [initialData]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : value,
    }));
  }

function handleSubmit(e) {
  e.preventDefault();

  if (
    !form.full_name.trim() ||
    !form.phone.trim() ||
    !form.whatsapp.trim()
  ) {
    alert("Please fill all required fields.");
    return;
  }

  if (onSave) {
    onSave(form);
  }

  onClose();
}

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-5">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden">

        {/* HEADER */}

        <div className="flex items-center justify-between px-8 py-6 border-b">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {isEdit
                ? "Edit Staff Member"
                : "Add Staff Member"}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Staff members will receive
              reservation notifications.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center"
          >
            <X size={20} />
          </button>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >

          {/* NAME */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="full_name"
              value={form.full_name}
              onChange={handleChange}
              placeholder="Ali Khan"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* ROLE */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Role
            </label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Salesman</option>
              <option>Pharmacist</option>
              <option>Manager</option>
              <option>Cashier</option>
              <option>Owner</option>
            </select>
          </div>

          {/* PHONE */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* WHATSAPP */}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              WhatsApp Number
            </label>

            <input
              type="text"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* CHECKBOX */}

          <div className="flex items-start gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">

            <input
              type="checkbox"
              name="receive_whatsapp"
              checked={form.receive_whatsapp}
              onChange={handleChange}
              className="mt-1 w-5 h-5 accent-blue-600"
            />

            <div>
              <p className="font-semibold text-blue-700">
                Receive Reservation Alerts
              </p>

              <p className="text-sm text-blue-600 mt-1">
                This staff member will receive
                WhatsApp notifications whenever
                a customer reserves medicine.
              </p>
            </div>

          </div>

          {/* FOOTER */}

          <div className="flex justify-end gap-3 pt-4 border-t">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-slate-200 font-semibold hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
            >
              {isEdit
                ? "Update Staff"
                : "Save Staff"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}