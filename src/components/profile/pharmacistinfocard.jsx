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

export default function PharmacistInfoCard({
  profile
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        Pharmacist Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <Info
          label="Full Name"
          value={profile.pharmacist_name}
        />

        <Info
          label="Qualification"
          value={profile.qualification}
        />

        <Info
          label="CNIC"
          value={profile.pharmacist_cnic}
        />

        <Info
          label="Email"
          value={profile.pharmacist_email}
        />

      </div>
    </div>
  );
}