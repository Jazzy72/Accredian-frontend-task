// src/api.js

import axios from 'axios';

const API_BASE_URL = 'https://accredian-backend-task-oarp.onrender.com'; // New Render URL

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    console.error("There was an error submitting the referral!", error);
    throw error;
  }
};
