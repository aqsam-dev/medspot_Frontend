const API_URL = "http://localhost:5000/api/pharmacy-staff";

// ============================================
// Get Auth Headers
// ============================================

function getHeaders() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

// ============================================
// Get All Staff
// ============================================

export async function getStaff() {
    const response = await fetch(API_URL, {
        headers: getHeaders(),
    });

    return response.json();
}

// ============================================
// Add Staff
// ============================================

export async function addStaff(data) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(data),
    });

    return response.json();
}

// ============================================
// Update Staff
// ============================================

export async function updateStaff(staffId, data) {
    const response = await fetch(
        `${API_URL}/${staffId}`,
        {
            method: "PUT",
            headers: getHeaders(),
            body: JSON.stringify(data),
        }
    );

    return response.json();
}

// ============================================
// Toggle WhatsApp Alerts
// ============================================

export async function toggleWhatsapp(staffId) {
    const response = await fetch(
        `${API_URL}/${staffId}/toggle`,
        {
            method: "PATCH",
            headers: getHeaders(),
        }
    );

    return response.json();
}

// ============================================
// Delete Staff
// ============================================

export async function deleteStaff(staffId) {
    const response = await fetch(
        `${API_URL}/${staffId}`,
        {
            method: "DELETE",
            headers: getHeaders(),
        }
    );

    return response.json();
}


