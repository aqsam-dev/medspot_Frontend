const API_BASE_URL = 'http://localhost:5000/api';

// Generic API call function for JSON requests
const apiCall = async (endpoint, method = 'GET', data = null) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const config = { method, headers: {} };

  // Only set Content-Type for JSON body
  if (!(data instanceof FormData)) {
    config.headers['Content-Type'] = 'application/json';
  }

  if (data && method !== 'GET') {
    config.body = data instanceof FormData ? data : JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong');
    }

    return result;
  } catch (error) {
    throw error;
  }
};

// -------------------------
// PHARMACY API
// -------------------------
export const pharmacyAPI = {
  register: (formData) => apiCall('/pharmacy/register', 'POST', formData), // supports FormData
  login: (data) => apiCall('/pharmacy/login', 'POST', data),
};

// -------------------------
// ADMIN API
// -------------------------
export const adminAPI = {
  getPendingPharmacies: () => apiCall('/admin/pending-pharmacies'),
  updateStatus: (data) => apiCall('/admin/update-status', 'POST', data),
};

// -------------------------
// AUTH API
// -------------------------
export const authAPI = {
  forgotPassword: (data) => apiCall('/auth/forgot-password', 'POST', data),
  verifyOtp: (data) => apiCall('/auth/verify-otp', 'POST', data),
  resetPassword: (data) => apiCall('/auth/reset-password', 'POST', data),
};

// -------------------------
// GENERIC FILE UPLOAD API
// -------------------------
export const uploadFile = async (endpoint, file) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  return response.json();
};

// -------------------------
// PRESCRIPTION API
// -------------------------
export const prescriptionAPI = {
  // Get all prescriptions (for queue)
  getAll: () => apiCall('/patient/prescriptions'),

  // Get single prescription
  getById: (id) => apiCall(`/patient/prescriptions/${id}`),
};


// -------------------------
// RESPONSE API (PHARMACY SIDE)
// -------------------------
export const responseAPI = {
  send: (data) => apiCall('/patient/responses', 'POST', data),

  // Get responses for a prescription (patient side later)
  getByPrescription: (id) => apiCall(`/patient/responses/${id}`),
};

