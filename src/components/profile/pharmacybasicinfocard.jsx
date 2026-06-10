import {
  Building2,
  User,
  Mail,
  Phone,
  FileText,
  Calendar,
  Pencil
} from "lucide-react";

function Info({ icon, label, value }) {
  return (
    <div className="bg-gray-50 border rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}

        <span className="text-xs uppercase text-gray-500">
          {label}
        </span>
      </div>

      <p className="font-semibold text-gray-800">
        {value || "-"}
      </p>
    </div>
  );
}

export default function PharmacyBasicInfoCard({
  profile,
  onEdit
}) {
  const licenseUrl = profile.license_url;

  const isPdf =
    licenseUrl?.toLowerCase().includes(".pdf");

  return (
    <div className="bg-white rounded-2xl border shadow-sm">

      <div className="flex justify-between items-center p-6 border-b">

        <div>
          <h2 className="text-xl font-semibold">
            Pharmacy Basic Information
          </h2>

          <p className="text-sm text-gray-500">
            Registration information
          </p>
        </div>

        <button
          onClick={onEdit}
          className="
            flex items-center gap-2
            px-4 py-2
            bg-blue-600
            text-white
            rounded-xl
          "
        >
          <Pencil size={16} />
          Edit
        </button>

      </div>

      <div className="p-6">

        <div className="grid md:grid-cols-2 gap-4">

          <Info
            icon={<Building2 size={16} />}
            label="Pharmacy Name"
            value={profile.pharmacy_name}
          />

          <Info
            icon={<User size={16} />}
            label="Owner Name"
            value={profile.owner_name}
          />

          <Info
            icon={<Mail size={16} />}
            label="Owner Email"
            value={profile.owner_email}
          />

          <Info
            icon={<Phone size={16} />}
            label="Owner Phone"
            value={profile.owner_phone}
          />

          <Info
            icon={<FileText size={16} />}
            label="Owner CNIC"
            value={profile.owner_cnic}
          />

          <Info
            icon={<Calendar size={16} />}
            label="Years In Operation"
            value={profile.years_in_operation}
          />

        </div>

        {licenseUrl && (
          <div className="mt-6">

            <div className="flex items-center gap-2 mb-3">
              <FileText
                size={18}
                className="text-blue-600"
              />

              <h3 className="font-semibold">
                Pharmacy License
              </h3>
            </div>

            {/* PDF LICENSE */}

            {isPdf ? (
              <button
                onClick={() => {
                  window.location.href =
                    licenseUrl;
                }}
                className="
                  bg-green-600
                  text-white
                  px-4 py-2
                  rounded-xl
                "
              >
                View License
              </button>
            ) : (

              /* IMAGE LICENSE */

              <div className="border rounded-xl overflow-hidden">
                <img
                  src={licenseUrl}
                  alt="Pharmacy License"
                  className="
                    w-full
                    h-[350px]
                    object-contain
                    bg-white
                  "
                />
              </div>

            )}

          </div>
        )}

      </div>

    </div>
  );
}