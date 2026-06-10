const API = "http://localhost:5000/api/pharmacy";

const pharmacyprofileService = {
  async getProfile(id) {
    const res = await fetch(
      `${API}/profile/${id}`
    );

    const data = await res.json();

    return data.pharmacy;
  },

  async updateProfile(id, payload) {
    const res = await fetch(
      `${API}/profile/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    return res.json();
  },

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

    return res.json();
  },

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

    return res.json();
  }
};

export default pharmacyprofileService;