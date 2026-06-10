function Info({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {label}
      </p>

      <p className="font-medium">
        {value || "-"}
      </p>
    </div>
  );
}

export default function PharmacyInfoCard({
  profile,
  onEdit
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">
          Pharmacy Information
        </h2>

        <button
          onClick={onEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Edit Profile
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <Info
          label="Pharmacy Name"
          value={profile.pharmacy_name}
        />

        <Info
          label="Owner Name"
          value={profile.owner_name}
        />

        <Info
          label="Owner Email"
          value={profile.owner_email}
        />

        <Info
          label="Phone"
          value={profile.owner_phone}
        />

        <Info
          label="Province"
          value={profile.province}
        />

        <Info
          label="City"
          value={profile.city}
        />

        <Info
          label="Area"
          value={profile.area}
        />

      </div>
    </div>
  );
}