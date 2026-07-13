import {
  User,
  Phone,
  MessageCircle,
  Pencil,
  Trash2,
  Bell,
  BellOff,
} from "lucide-react";

export default function StaffCard({
  member,
  onEdit,
  onDelete,
  onToggleAlerts,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">

      {/* Top */}
      <div className="p-6 flex items-start justify-between">

        <div className="flex items-center gap-4">

          {/* Avatar */}

          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <User size={28} />
          </div>

          {/* Name */}

          <div>

            <h2 className="text-lg font-bold text-slate-800">
              {member.full_name || member.name}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              {member.role}
            </p>

          </div>

        </div>

        {/* Active */}

        <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-semibold">
          Active
        </span>

      </div>

      {/* Divider */}

      <div className="border-t border-slate-100" />

      {/* Details */}

      <div className="p-6 space-y-5">

        {/* Phone */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <Phone size={18} />
          </div>

          <div>

            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
              Phone
            </p>

            <p className="text-sm font-medium text-slate-700">
              {member.phone}
            </p>

          </div>

        </div>

        {/* WhatsApp */}

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <MessageCircle size={18} />
          </div>

          <div>

            <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
              WhatsApp
            </p>

            <p className="text-sm font-medium text-slate-700">
              {member.whatsapp}
            </p>

          </div>

        </div>

        {/* Alerts */}

        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">

          <div className="flex items-center gap-3">

            {member.receive_whatsapp ? (
              <Bell
                size={20}
                className="text-blue-600"
              />
            ) : (
              <BellOff
                size={20}
                className="text-red-500"
              />
            )}

            <div>

              <p className="font-semibold text-slate-700">
                Reservation Alerts
              </p>

              <p className="text-xs text-slate-500">
                {member.receive_whatsapp
                  ? "Enabled"
                  : "Disabled"}
              </p>

            </div>

          </div>

          <button
            onClick={() =>
              onToggleAlerts &&
              onToggleAlerts(member)
            }
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              member.receive_whatsapp
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-red-50 text-red-600 hover:bg-red-100"
            }`}
          >
            {member.receive_whatsapp
              ? "Disable"
              : "Enable"}
          </button>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-100 p-5 flex items-center justify-end gap-3 bg-slate-50/50">

        <button
          onClick={() => onEdit && onEdit(member)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition font-semibold text-slate-700"
        >
          <Pencil size={16} />
          Edit
        </button>

        <button
          onClick={() => onDelete && onDelete(member)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition font-semibold"
        >
          <Trash2 size={16} />
          Deactivate
        </button>

      </div>

    </div>
  );
}