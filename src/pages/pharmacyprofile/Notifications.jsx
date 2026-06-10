import {
  Bell,
  Calendar,
  Package,
  XCircle,
  ChevronRight,
} from "lucide-react";

import AccountLayout from "../../components/layout/AccountLayout";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "New Reservation Received",
      description:
        "A patient has reserved Augmentin 625mg.",
      time: "2 minutes ago",
      icon: Bell,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      id: 2,
      title: "Inventory Synced",
      description:
        "POS inventory synchronized successfully.",
      time: "10 minutes ago",
      icon: Package,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      id: 3,
      title: "Reservation Cancelled",
      description:
        "A reservation was cancelled by the patient.",
      time: "25 minutes ago",
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      id: 4,
      title: "Prescription Approved",
      description:
        "Prescription #104 has been approved.",
      time: "1 hour ago",
      icon: Calendar,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
  ];

  return (
    <AccountLayout
      headerProps={{
        title: "Notifications",
        subtitle:
          "Stay updated with recent pharmacy activity",
      }}
    >
      <div className="space-y-6">
        {/* Summary Card */}

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-xl font-semibold">
            Notification Center
          </h2>

          <p className="text-blue-100 mt-2">
            You have {notifications.length} recent
            notifications.
          </p>
        </div>

        {/* Notification List */}

        <div className="bg-white rounded-2xl shadow border overflow-hidden">
          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="
                  flex items-center justify-between
                  p-5 border-b last:border-b-0
                  hover:bg-gray-50
                  transition
                  cursor-pointer
                "
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`
                      w-12 h-12 rounded-xl
                      flex items-center justify-center
                      ${item.bg}
                    `}
                  >
                    <Icon
                      size={22}
                      className={item.color}
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                      {item.time}
                    </p>
                  </div>
                </div>

                <ChevronRight
                  size={18}
                  className="text-gray-400"
                />
              </div>
            );
          })}
        </div>
      </div>
    </AccountLayout>
  );
}