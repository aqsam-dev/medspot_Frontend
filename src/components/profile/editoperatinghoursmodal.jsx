import { useState } from "react";

import pharmacyProfileService
from "../../services/pharmacyprofileservice";

const daysOfWeek = [
  {
    id: "monday",
    label: "Monday"
  },
  {
    id: "tuesday",
    label: "Tuesday"
  },
  {
    id: "wednesday",
    label: "Wednesday"
  },
  {
    id: "thursday",
    label: "Thursday"
  },
  {
    id: "friday",
    label: "Friday"
  },
  {
    id: "saturday",
    label: "Saturday"
  },
  {
    id: "sunday",
    label: "Sunday"
  }
];

export default function EditOperatingHoursModal({
  profile,
  onClose,
  onSuccess
}) {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [operatingHours,
    setOperatingHours] = useState(
      profile.operating_hours
    );

  const [is24Hours,
    setIs24Hours] = useState(
      Object.values(
        profile.operating_hours || {}
      ).every(
        d =>
          d.isOpen &&
          d.open === "00:00" &&
          d.close === "23:59"
      )
    );

  const handleDayToggle = (day) => {
    setOperatingHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        isOpen: !prev[day].isOpen,
        open: !prev[day].isOpen
          ? "09:00"
          : "",
        close: !prev[day].isOpen
          ? "18:00"
          : ""
      }
    }));
  };

  const handleTimeChange = (
    day,
    field,
    value
  ) => {
    setOperatingHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value
      }
    }));
  };

  const handle24Hours = (value) => {
    setIs24Hours(value);

    if (value) {
      const allDays = {};

      daysOfWeek.forEach((d) => {
        allDays[d.id] = {
          open: "00:00",
          close: "23:59",
          isOpen: true
        };
      });

      setOperatingHours(allDays);
    }
  };

  const handleSubmit = async () => {
    const hasOpenDay =
      Object.values(
        operatingHours
      ).some(
        (d) =>
          d.isOpen &&
          d.open &&
          d.close
      );

    if (!hasOpenDay) {
      setError(
        "At least one day must be open"
      );
      return;
    }

    try {
      setLoading(true);

      await pharmacyProfileService
        .updateOperatingHours(
          profile.pharmacy_id,
          {
            operating_hours:
              operatingHours
          }
        );

      onSuccess();
    } catch (err) {
      console.error(err);

      setError(
        "Failed to update"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed inset-0
        bg-black/50
        flex items-center justify-center
        z-50
      "
    >
      <div
        className="
          bg-white
          rounded-2xl
          w-full
          max-w-4xl
          p-6
          max-h-[90vh]
          overflow-auto
        "
      >
        <h2
          className="
            text-xl font-semibold mb-6
          "
        >
          Edit Operating Hours
        </h2>

        <div className="mb-6">
          <p className="font-medium mb-3">
            Operates 24/7?
          </p>

          <div className="flex gap-3">
            <button
              onClick={() =>
                handle24Hours(true)
              }
              className={`
                px-4 py-2 rounded-xl
                ${
                  is24Hours
                    ? "bg-blue-600 text-white"
                    : "border"
                }
              `}
            >
              Yes
            </button>

            <button
              onClick={() =>
                setIs24Hours(false)
              }
              className={`
                px-4 py-2 rounded-xl
                ${
                  !is24Hours
                    ? "bg-blue-600 text-white"
                    : "border"
                }
              `}
            >
              No
            </button>
          </div>
        </div>

        {!is24Hours && (
          <div className="space-y-3">
            {daysOfWeek.map((day) => (
              <div
                key={day.id}
                className="
                  border rounded-xl p-4
                "
              >
                <div
                  className="
                    flex items-center gap-3
                  "
                >
                  <input
                    type="checkbox"
                    checked={
                      operatingHours[
                        day.id
                      ]?.isOpen
                    }
                    onChange={() =>
                      handleDayToggle(
                        day.id
                      )
                    }
                  />

                  <span>
                    {day.label}
                  </span>

                  {operatingHours[
                    day.id
                  ]?.isOpen && (
                    <>
                      <input
                        type="time"
                        value={
                          operatingHours[
                            day.id
                          ].open
                        }
                        onChange={(e) =>
                          handleTimeChange(
                            day.id,
                            "open",
                            e.target.value
                          )
                        }
                        className="border p-2 rounded"
                      />

                      <input
                        type="time"
                        value={
                          operatingHours[
                            day.id
                          ].close
                        }
                        onChange={(e) =>
                          handleTimeChange(
                            day.id,
                            "close",
                            e.target.value
                          )
                        }
                        className="border p-2 rounded"
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="
              px-4 py-2 border rounded-xl
            "
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="
              px-4 py-2
              bg-blue-600
              text-white
              rounded-xl
            "
          >
            {loading
              ? "Saving..."
              : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}