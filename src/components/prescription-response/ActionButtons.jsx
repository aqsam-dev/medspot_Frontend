import { responseAPI } from "../../services/api";

export default function ActionButtons({
  prescription,
  medicines,
}) {

  const validMedicines = medicines.filter(
    (m) =>
      m.medicine_name.trim() !== "" &&
      m.quantity !== "" &&
      m.price !== ""
  );

  const isValid = validMedicines.length > 0;

  const getResponseType = () => {
    const statuses = validMedicines.map(
      (m) => m.status
    );

    const availableCount = statuses.filter(
      (s) => s === "available"
    ).length;

    const unavailableCount = statuses.filter(
      (s) => s === "unavailable"
    ).length;

    if (
      availableCount === statuses.length
    ) {
      return "ALL";
    }

    if (
      unavailableCount === statuses.length
    ) {
      return "NONE";
    }

    return "PARTIAL";
  };

  const handleSendResponse = async () => {
    try {

      const payload = {
        prescription_id: prescription.id,
        pharmacy_id: 1,
        response_type: getResponseType(),
        medicines: validMedicines,
      };

      console.log(payload);

      const res = await responseAPI.send(payload);

      if (res.success) {
        alert("Response sent successfully");
      }

    } catch (err) {
      console.error(err);
      alert("Failed to send response");
    }
  };

  return (
    <div className="flex gap-4">

      <button
        disabled={!isValid}
        onClick={handleSendResponse}
        className={`flex-[2] p-3 rounded-xl text-white ${
          isValid
            ? "bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Send Response
      </button>

    </div>
  );
}