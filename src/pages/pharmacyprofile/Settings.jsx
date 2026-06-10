import Header from "../../components/layout/Header";

export default function Settings() {
  return (
    <>
      <Header
        title="Settings"
        subtitle="Manage system preferences"
      />

      <div className="grid gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold mb-4">
            Reservation Settings
          </h3>

          <div className="space-y-4">

            <div>
              <label>
                Reservation Timeout (minutes)
              </label>

              <input
                type="number"
                defaultValue={30}
                className="border rounded-lg p-2 w-full"
              />
            </div>

            <div>
              <label>
                Maximum Quantity Per Reservation
              </label>

              <input
                type="number"
                defaultValue={3}
                className="border rounded-lg p-2 w-full"
              />
            </div>

          </div>
        </div>

      </div>
    </>
  );
}