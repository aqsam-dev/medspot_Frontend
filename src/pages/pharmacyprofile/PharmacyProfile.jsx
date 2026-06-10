import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import PharmacyInfoCard from "../../components/profile/pharmacyinfocard";
import PharmacistInfoCard from "../../components/profile/pharmacistinfocard";
import CredentialsCard from "../../components/profile/credentialscard";
import EditProfileModal from "../../components/profile/editprofilemodal";
import ChangeUsernameModal from "../../components/profile/changeusernamemodal";
import ChangePasswordModal from "../../components/profile/changepasswordmodal";
import pharmacyService from "../../services/pharmacyprofileservice";

export default function PharmacyProfile() {
  const [profile, setProfile] = useState(null);

  const [showEdit, setShowEdit] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const loadProfile = async () => {
    try {
      const pharmacy = JSON.parse(
        localStorage.getItem("pharmacyData")
      );

      const data = await pharmacyService.getProfile(
        pharmacy.pharmacy_id
      );

      setProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  if (!profile) return null;

  return (
    <MainLayout
      headerProps={{
        title: "Pharmacy Profile",
        subtitle: "Manage pharmacy information"
      }}
    >
      <div className="space-y-6">

        <PharmacyInfoCard
          profile={profile}
          onEdit={() => setShowEdit(true)}
        />

        <PharmacistInfoCard
          profile={profile}
        />

        <CredentialsCard
          profile={profile}
          onChangeUsername={() =>
            setShowUsername(true)
          }
          onChangePassword={() =>
            setShowPassword(true)
          }
        />

      </div>

      {showEdit && (
        <EditProfileModal
          profile={profile}
          onClose={() => setShowEdit(false)}
          onSuccess={loadProfile}
        />
      )}

      {showUsername && (
        <ChangeUsernameModal
          profile={profile}
          onClose={() => setShowUsername(false)}
          onSuccess={loadProfile}
        />
      )}

      {showPassword && (
        <ChangePasswordModal
          profile={profile}
          onClose={() => setShowPassword(false)}
        />
      )}
    </MainLayout>
  );
}