const API = "http://localhost:5000/api/pharmacy-profile";

const pharmacyProfileService = {
  // ==========================
  // GET FULL PROFILE
  // ==========================
  async getProfile(id) {
    const res = await fetch(
      `${API}/profile/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch profile");
    }

    const data = await res.json();

    return data.pharmacy;
  },

  // ==========================
  // CARD 1
  // BASIC INFO
  // ==========================
  async updateBasicInfo(id, payload) {
    const res = await fetch(
      `${API}/basic-info/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return await res.json();
  },

  // ==========================
  // CARD 2
  // ADDRESS & LOCATION
  // ==========================
  async updateAddress(id, payload) {
    const res = await fetch(
      `${API}/address/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return await res.json();
  },

  // ==========================
  // CARD 3
  // OPERATING HOURS
  // ==========================
  async updateOperatingHours(id, payload) {
    const res = await fetch(
      `${API}/operating-hours/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return await res.json();
  },

  // ==========================
  // CARD 4
  // PHARMACIST INFO
  // ==========================
  async updatePharmacist(id, payload) {
    const res = await fetch(
      `${API}/pharmacist/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return await res.json();
  },

  // ==========================
  // CARD 5
  // USERNAME
  // ==========================
  async changeUsername(payload) {
    const res = await fetch(
      `${API}/change-username`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return await res.json();
  },

  // ==========================
  // CARD 5
  // PASSWORD
  // ==========================
  async changePassword(payload) {
    const res = await fetch(
      `${API}/change-password`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return await res.json();
  }
};

export default pharmacyProfileService;