import { useState } from "react";
import axios from "axios";

export default function EditBasicInfoModal({
  profile,
  onClose,
  onSuccess
}) {

  const [formData,setFormData] = useState({
    owner_name: profile.owner_name,
    owner_email: profile.owner_email,
    owner_phone: profile.owner_phone,
    owner_cnic: profile.owner_cnic,
    years_in_operation:
      profile.years_in_operation
  });

  const [loading,setLoading] =
    useState(false);

  const handleChange = (e) => {

    const { name,value } = e.target;

    if(name==="owner_name"){
      const cleaned =
        value.replace(/[^A-Za-z ]/g,"")
        .slice(0,20);

      return setFormData(prev=>({
        ...prev,
        owner_name:cleaned
      }));
    }

    if(name==="owner_phone"){
      const digits =
        value.replace(/\D/g,"")
        .slice(0,11);

      return setFormData(prev=>({
        ...prev,
        owner_phone:digits
      }));
    }

    if(name==="owner_cnic"){

      const digits =
        value.replace(/\D/g,"")
        .slice(0,13);

      let formatted = digits;

      if(digits.length>5){
        formatted =
          digits.slice(0,5)
          + "-"
          + digits.slice(5);
      }

      if(digits.length>12){
        formatted =
          digits.slice(0,5)
          + "-"
          + digits.slice(5,12)
          + "-"
          + digits.slice(12);
      }

      return setFormData(prev=>({
        ...prev,
        owner_cnic:formatted
      }));
    }

    setFormData(prev=>({
      ...prev,
      [name]:value
    }));
  };

  const handleSubmit = async () => {

    try{

      setLoading(true);

      await axios.put(
        `/api/pharmacy-profile/basic-info/${profile.pharmacy_id}`,
        formData
      );

      onSuccess();
      onClose();

    }catch(err){
      console.error(err);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-2xl rounded-2xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Edit Basic Information
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="owner_name"
            value={formData.owner_name}
            onChange={handleChange}
            placeholder="Owner Name"
            className="border p-3 rounded-xl"
          />

          <input
            name="owner_email"
            value={formData.owner_email}
            onChange={handleChange}
            placeholder="Owner Email"
            className="border p-3 rounded-xl"
          />

          <input
            name="owner_phone"
            value={formData.owner_phone}
            onChange={handleChange}
            placeholder="03XXXXXXXXX"
            className="border p-3 rounded-xl"
          />

          <input
            name="owner_cnic"
            value={formData.owner_cnic}
            onChange={handleChange}
            placeholder="12345-1234567-1"
            className="border p-3 rounded-xl"
          />

          <input
            type="number"
            min="0"
            max="50"
            name="years_in_operation"
            value={formData.years_in_operation}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-xl"
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
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}