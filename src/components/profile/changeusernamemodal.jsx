import { useState } from "react";
import Modal from "../ui/modal";
import Input from "../ui/input";

export default function ChangeUsernameModal({
  profile,
  onClose,
  onSuccess
}) {
  const [currentPassword,setCurrentPassword]=useState("");
  const [newUsername,setNewUsername]=useState("");

  const submit = async () => {

    const res = await fetch(
      "http://localhost:5000/api/pharmacy/change-username",
      {
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          pharmacy_id:profile.pharmacy_id,
          currentPassword,
          newUsername
        })
      }
    );

    const data = await res.json();

    if(data.success){
      alert("Username Updated");
      onSuccess();
      onClose();
    } else {
      alert(data.message);
    }
  };

  return (
    <Modal title="Change Username" onClose={onClose}>
      <Input
        label="New Username"
        value={newUsername}
        onChange={(e)=>setNewUsername(e.target.value)}
      />

      <Input
        label="Current Password"
        type="password"
        value={currentPassword}
        onChange={(e)=>setCurrentPassword(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
      >
        Update Username
      </button>
    </Modal>
  );
}