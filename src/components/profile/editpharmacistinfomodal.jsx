import { useState } from "react";

import pharmacyProfileService
from "../../services/pharmacyprofileservice";

const emailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "icloud.com"
];

export default function EditPharmacistModal({
  profile,
  onClose,
  onSuccess
}) {

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState({});

  const [formData, setFormData] =
    useState({
      full_name:
        profile.pharmacist_name || "",

      qualification:
        profile.qualification || "",

      cnic:
        profile.pharmacist_cnic || "",

      email:
        profile.pharmacist_email || ""
    });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "full_name") {
      const cleaned = value
        .replace(/[^A-Za-z ]/g, "")
        .slice(0, 20);

      setFormData(prev => ({
        ...prev,
        full_name: cleaned
      }));

      return;
    }

    if (name === "cnic") {

      const digits = value
        .replace(/\D/g, "")
        .slice(0, 13);

      let formatted = digits;

      if (digits.length > 5)
        formatted =
          digits.slice(0, 5) +
          "-" +
          digits.slice(5);

      if (digits.length > 12)
        formatted =
          digits.slice(0, 5) +
          "-" +
          digits.slice(5, 12) +
          "-" +
          digits.slice(12);

      setFormData(prev => ({
        ...prev,
        cnic: formatted
      }));

      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {

    const e = {};

    if (
      !/^[A-Za-z ]{3,20}$/.test(
        formData.full_name
      )
    ) {
      e.full_name =
        "3-20 letters only";
    }

    if (
      !/^\d{5}-\d{7}-\d{1}$/.test(
        formData.cnic
      )
    ) {
      e.cnic =
        "Invalid CNIC";
    }

    if (
      !/^.+@(gmail|yahoo|hotmail|icloud)\.com$/.test(
        formData.email
      )
    ) {
      e.email =
        "Invalid Email";
    }

    if (!formData.qualification) {
      e.qualification =
        "Required";
    }

    return e;
  };

  const handleSubmit = async () => {

    const e = validate();

    setErrors(e);

    if (
      Object.keys(e).length
    ) return;

    try {

      setLoading(true);

      await pharmacyProfileService
        .updatePharmacist(
          profile.pharmacy_id,
          formData
        );

      onSuccess();

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Edit Pharmacist
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <div>
            <label>
              Full Name
            </label>

            <input
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />

            {errors.full_name &&
              <p className="text-red-500 text-sm">
                {errors.full_name}
              </p>
            }
          </div>

          <div>
            <label>
              Qualification
            </label>

            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            >
              <option value="">
                Select
              </option>

              <option value="bpharm">
                B-Pharm
              </option>

              <option value="mpharm">
                M-Pharm
              </option>
            </select>
          </div>

          <div>
            <label>
              CNIC
            </label>

            <input
              name="cnic"
              value={formData.cnic}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

          <div>
            <label>
              Email
            </label>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3"
            />
          </div>

        </div>

        {profile.pharmacist_license && (
          <div className="mt-6">

            <label className="block mb-2">
              Current License
            </label>

            <img
              src={profile.pharmacist_license}
              alt=""
              className="
                h-64
                w-full
                object-contain
                border
                rounded-xl
              "
            />
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="
              bg-blue-600
              text-white
              px-4 py-2
              rounded-xl
            "
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}