import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefitsData = [
    { program: 'Standard', referrerBonus: '$50', refereeBonus: '$25' },
    { program: 'Premium', referrerBonus: '$100', refereeBonus: '$50' },
    { program: 'Business', referrerBonus: '$200', refereeBonus: '$100' },
    { program: 'Gold', referrerBonus: '$300', refereeBonus: '$150' },
    { program: 'Platinum', referrerBonus: '$500', refereeBonus: '$250' },
    // { program: 'Diamond', referrerBonus: '$1000', refereeBonus: '$500' },
    // { program: 'Exclusive', referrerBonus: '$2000', refereeBonus: '$1000' },
  ];

  return (
    <div className="benefits-bg">
    <div className="benefits-container">
      <h2 className="benefits-heading">Referral Benefits</h2>
      <div className="benefits-table">
        <div className="benefits-row header">
          <div className="benefits-column">Programs</div>
          <div className="benefits-column">Referrer Bonus</div>
          <div className="benefits-column">Referee Bonus</div>
        </div>
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefits-row">
            <div className="benefits-column">{benefit.program}</div>
            <div className="benefits-column">{benefit.referrerBonus}</div>
            <div className="benefits-column">{benefit.refereeBonus}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Benefits;
