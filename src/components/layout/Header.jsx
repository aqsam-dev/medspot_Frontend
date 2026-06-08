export default function Header({
  title,
  subtitle,
  extra,
}) {

  const pharmacy = JSON.parse(
    localStorage.getItem("pharmacyData")
  );

  return (
    <header className="flex justify-between items-center mb-10">

      <div>
        <h1 className="text-3xl font-bold text-blue-600">{title}</h1>
        <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
      </div>

      <div className="flex items-center gap-6">
        {extra}

        <div className="flex items-center gap-3 border-l pl-6">
          <div className="text-right">
            <p className="text-sm font-semibold">
              {pharmacy?.owner_name}
            </p>

            <p className="text-xs text-gray-500">
              {pharmacy?.pharmacy_name}
            </p>
          </div>

          <img
            className="w-10 h-10 rounded-full border"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQHBNen3qqkn8Sag78q8oHvHBUTYXDTzYjan4MLCVJCGdii0fXdaBvCbn2PZr8RXi0wbbEQlUTA3GMddyssiJA1PdjypdqagJ0ad29XxcTutpkRnLrJ5Nk7Jv21-TqPvkpaMqqifX7wJC90gQRL18TPVxJVw-BBuB3hSpYA7F1YvMEGBWpAz8wJZzxjGDKPQmfokVswprhlPny1OxIPNcmcPdP5xBf5tjirR8HV-PZfVWTeKb77fs4QwmpVpQWCXCWtk2WXFwlqQ"
            alt="user"
          />
        </div>
      </div>
    </header>
  );
}