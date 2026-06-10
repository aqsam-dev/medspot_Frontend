import Header from "../../components/layout/Header";

export default function Notifications() {
  return (
    <>
      <Header
        title="Notifications"
        subtitle="Recent system activity"
      />

      <div className="bg-white rounded-xl p-6 shadow">
        <ul className="space-y-4">

          <li>
            New reservation received.
          </li>

          <li>
            Inventory synced successfully.
          </li>

          <li>
            Reservation cancelled.
          </li>

        </ul>
      </div>
    </>
  );
}