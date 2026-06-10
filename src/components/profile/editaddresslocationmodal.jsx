import {
  useState,
  useRef,
  useEffect
} from "react";

import axios from "axios";

import pakistanData from "../../data/pakistanData.json";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMapsLibrary
} from "@vis.gl/react-google-maps";

const GOOGLE_MAPS_API_KEY =
  process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function PlaceAutocomplete({
  onPlaceSelect
}) {
  const inputRef = useRef(null);

  const places =
    useMapsLibrary("places");

  useEffect(() => {

    if (!places || !inputRef.current)
      return;

    const autocomplete =
      new places.Autocomplete(
        inputRef.current,
        {
          fields: [
            "geometry",
            "formatted_address"
          ]
        }
      );

    autocomplete.addListener(
      "place_changed",
      () => {
        const place =
          autocomplete.getPlace();

        if (
          place.geometry &&
          place.geometry.location
        ) {
          onPlaceSelect(place);
        }
      }
    );

  }, [places, onPlaceSelect]);

  return (
    <input
      ref={inputRef}
      placeholder="Search location"
      className="
        absolute
        top-3
        left-3
        z-10
        bg-white
        border
        px-3
        py-2
        rounded-lg
        w-72
      "
    />
  );
}

export default function EditAddressLocationModal({
  profile,
  onClose,
  onSuccess
}) {

  const [cities, setCities] =
    useState([]);

  const [areas, setAreas] =
    useState([]);

  const [formData, setFormData] =
    useState({

      province:
        profile.province,

      city:
        profile.city,

      area:
        profile.area,

      shop_no:
        profile.shop_no,

      street_no:
        profile.street_no,

      block_no:
        profile.block_no,

      map_lat:
        profile.map_lat,

      map_lng:
        profile.map_lng
    });

  useEffect(() => {

    setCities(
      Object.keys(
        pakistanData[
        profile.province
        ] || {}
      )
    );

    setAreas(
      pakistanData[
      profile.province
      ]?.[
      profile.city
      ] || []
    );

  }, [profile]);

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    if (
      name === "province"
    ) {

      setFormData(prev => ({
        ...prev,
        province: value,
        city: "",
        area: ""
      }));

      setCities(
        Object.keys(
          pakistanData[value] || {}
        )
      );

      setAreas([]);

      return;
    }

    if (name === "city") {

      setFormData(prev => ({
        ...prev,
        city: value,
        area: ""
      }));

      setAreas(
        pakistanData[
        formData.province
        ]?.[value] || []
      );

      return;
    }

    if (
      [
        "shop_no",
        "street_no",
        "block_no"
      ].includes(name)
    ) {

      const cleaned =
        value
          .replace(
            /[^A-Za-z0-9\-\/]/g,
            ""
          )
          .slice(0, 6);

      setFormData(prev => ({
        ...prev,
        [name]: cleaned
      }));

      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMapClick = (e) => {

    setFormData(prev => ({
      ...prev,
      map_lat:
        Number(
          e.detail.latLng.lat
        ),
      map_lng:
        Number(
          e.detail.latLng.lng
        )
    }));
  };

  const handleMarkerDrag =
    (e) => {

      setFormData(prev => ({
        ...prev,
        map_lat:
          Number(e.latLng.lat),
        map_lng:
          Number(e.latLng.lng)
      }));
    };

  const handlePlaceSelect =
    (place) => {

      const lat =
        place.geometry.location.lat();

      const lng =
        place.geometry.location.lng();

      setFormData(prev => ({
        ...prev,
        map_lat: lat,
        map_lng: lng
      }));
    };

  const save = async () => {

    try {

      await axios.put(
        `/api/pharmacy-profile/address/${profile.pharmacy_id}`,
        formData
      );

      onSuccess();
      onClose();

    } catch (err) {
      console.error(err);
    }
  };

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-full max-w-5xl rounded-2xl p-6 max-h-[90vh] overflow-auto">

        <h2 className="text-xl font-semibold mb-5">
          Edit Address & Location
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <select
            name="province"
            value={formData.province}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          >
            <option value="">
              Select Province
            </option>

            {Object.keys(
              pakistanData
            ).map(p => (
              <option
                key={p}
                value={p}
              >
                {p}
              </option>
            ))}
          </select>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          >
            <option value="">
              Select City
            </option>

            {cities.map(city => (
              <option
                key={city}
                value={city}
              >
                {city}
              </option>
            ))}
          </select>

          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="border p-3 rounded-xl"
          >
            <option value="">
              Select Area
            </option>

            {areas.map(area => (
              <option
                key={area}
                value={area}
              >
                {area}
              </option>
            ))}
          </select>

          <input
            name="shop_no"
            value={formData.shop_no}
            onChange={handleChange}
            placeholder="Shop No"
            className="border p-3 rounded-xl"
          />

          <input
            name="street_no"
            value={formData.street_no}
            onChange={handleChange}
            placeholder="Street No"
            className="border p-3 rounded-xl"
          />

          <input
            name="block_no"
            value={formData.block_no}
            onChange={handleChange}
            placeholder="Block No"
            className="border p-3 rounded-xl"
          />

        </div>

        <div className="h-[400px] mt-6 rounded-xl overflow-hidden border">

          <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>

            <Map
              defaultZoom={15}
              center={{
                lat: Number(formData.map_lat),
                lng: Number(formData.map_lng)
              }}
              mapId="593aaf660a6f150a749bed3e"
              onClick={handleMapClick}
            >

              <PlaceAutocomplete
                onPlaceSelect={
                  handlePlaceSelect
                }
              />

              <AdvancedMarker
                draggable
                position={{
                  lat: Number(formData.map_lat),
                  lng: Number(formData.map_lng)
                }}
                onDragEnd={
                  handleMarkerDrag
                }
              />

            </Map>

          </APIProvider>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
              px-4 py-2
              border rounded-xl
            "
          >
            Cancel
          </button>

          <button
            onClick={save}
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