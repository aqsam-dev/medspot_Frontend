import { useState } from "react";
import Modal from "../ui/modal";
import Input from "../ui/input";

export default function EditProfileModal({
  profile,
  onClose,
  onSuccess
}) {
  const [form, setForm] = useState({
    owner_name: profile.owner_name,
    owner_email: profile.owner_email,
    owner_phone: profile.owner_phone,
    city: profile.city,
    area: profile.area
  });

  const save = async () => {
    const res = await fetch(
      `http://localhost:5000/api/pharmacy/profile/${profile.pharmacy_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(form)
      }
    );

    const data = await res.json();

    if (data.success) {
      onSuccess();
      onClose();
    }
  };

  return (
    <Modal title="Edit Profile" onClose={onClose}>
      <Input
        label="Owner Name"
        value={form.owner_name}
        onChange={(e)=>
          setForm({...form, owner_name:e.target.value})
        }
      />

      <Input
        label="Email"
        value={form.owner_email}
        onChange={(e)=>
          setForm({...form, owner_email:e.target.value})
        }
      />

      <Input
        label="Phone"
        value={form.owner_phone}
        onChange={(e)=>
          setForm({...form, owner_phone:e.target.value})
        }
      />

      <Input
        label="City"
        value={form.city}
        onChange={(e)=>
          setForm({...form, city:e.target.value})
        }
      />

      <Input
        label="Area"
        value={form.area}
        onChange={(e)=>
          setForm({...form, area:e.target.value})
        }
      />

      <button
        onClick={save}
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg"
      >
        Save Changes
      </button>
    </Modal>
  );
}