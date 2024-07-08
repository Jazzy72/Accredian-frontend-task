// src/components/ReferForm.js

import React, { useState } from 'react';
import { submitReferral } from '../api';

const ReferForm = () => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitReferral(formData);
      alert('Referral submitted successfully!');
      // Handle successful response
    } catch (error) {
      alert('There was an error submitting the referral.');
      // Handle error response
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="referrerName" value={formData.referrerName} onChange={handleChange} placeholder="Your Name" required />
      <input type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleChange} placeholder="Your Email" required />
      <input type="text" name="refereeName" value={formData.refereeName} onChange={handleChange} placeholder="Friend's Name" required />
      <input type="email" name="refereeEmail" value={formData.refereeEmail} onChange={handleChange} placeholder="Friend's Email" required />
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReferForm;
