import React from 'react';

const pricingData = [
  {
    tier: "Standard",
    price: "$3,200",
    features: ["Shared cabin", "All main activities", "Access to amenities"]
  },
  {
    tier: "Premium",
    price: "$5,200",
    features: ["Private cabin", "Better views", "Priority booking"]
  },
  {
    tier: "VIP",
    price: "$8,900",
    features: ["Private suite", "Exclusive events", "Priority services"]
  }
];

 function Pricing() {
  return (
    <div style={{ paddingTop: '56px' }}>
      <section id="pricing">
        <h2 className="pricing-title">Rates & Packages</h2>
        <p className="pricing-subtitle">Choose the experience that matches your journey at sea.</p>

        <div className="pricing-cards">
          {pricingData.map((plan, index) => (
            <div className="card" key={index}>
              <h3>{plan.tier}</h3>
              <p className="price">{plan.price}</p>
              <ul className="pricing-description">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}export default  Pricing;