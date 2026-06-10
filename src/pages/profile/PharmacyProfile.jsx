import Header from "../../components/layout/Header";

export default function PharmacyProfile() {
  const pharmacy = JSON.parse(
    localStorage.getItem("pharmacyData")
  );

  return (
    <>
      <Header
        title="Pharmacy Profile"
        subtitle="Manage pharmacy information"
      />

      <div className="bg-white rounded-xl p-6 shadow">

        <h2 className="font-semibold mb-4">
          Basic Information
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <Info
            label="Pharmacy Name"
            value={pharmacy?.pharmacy_name}
          />

          <Info
            label="Owner Name"
            value={pharmacy?.owner_name}
          />

          <Info
            label="Email"
            value={pharmacy?.owner_email}
          />

          <Info
            label="Phone"
            value={pharmacy?.owner_phone}
          />

          <Info
            label="City"
            value={pharmacy?.city}
          />

          <Info
            label="Area"
            value={pharmacy?.area}
          />

        </div>
      </div>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">
        {label}
      </p>

      <p className="font-medium">
        {value || "-"}
      </p>
    </div>
  );
}