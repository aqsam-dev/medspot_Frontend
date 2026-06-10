export default function CredentialsCard({
  profile,
  onChangeUsername,
  onChangePassword
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        Credentials & Security
      </h2>

      <div className="flex justify-between items-center border-b pb-4">

        <div>
          <p className="font-medium">
            Username
          </p>

          <p className="text-gray-500">
            {profile.username}
          </p>
        </div>

        <button
          onClick={onChangeUsername}
          className="border px-4 py-2 rounded-lg"
        >
          Change Username
        </button>
      </div>

      <div className="pt-4">

        <button
          onClick={onChangePassword}
          className="bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Change Password
        </button>

      </div>
    </div>
  );
}