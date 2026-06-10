import Header from "../../components/layout/Header";

export default function HelpCenter() {
  return (
    <>
      <Header
        title="Help Center"
        subtitle="Documentation & support"
      />

      <div className="bg-white rounded-xl p-6 shadow">

        <div className="space-y-4">

          <div>
            <h3 className="font-semibold">
              How reservations work?
            </h3>

            <p className="text-gray-600 text-sm">
              MedSpot reserves stock for a limited time
              and validates sales through POS integration.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              POS Integration Guide
            </h3>

            <p className="text-gray-600 text-sm">
              Connect your POS using inventory sync
              and validate-sale APIs.
            </p>
          </div>

        </div>

      </div>
    </>
  );
}