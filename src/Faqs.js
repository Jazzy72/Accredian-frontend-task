import React from 'react';
import './Faqs.css';

const Faqs = () => {
  return (
    <div className="faq-bg">
    <div className="faqs-container">
      <h2>Frequently Asked Questions (FAQs)</h2>

      <div className="faq">
        <h3>What is the referral bonus?</h3>
        <p>The referral bonus is...</p>
      </div>

      <div className="faq">
        <h3>How do I refer a friend?</h3>
        <p>To refer a friend, you need to...</p>
      </div>

      <div className="faq">
        <h3>When will I receive my referral reward?</h3>
        <p>Your referral reward will be...</p>
      </div>

      {/* Add more FAQs as needed */}
    </div>
    </div>
  );
};

export default Faqs;
