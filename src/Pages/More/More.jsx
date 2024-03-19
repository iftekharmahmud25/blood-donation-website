import React from "react";

const More = () => {
  return (
    <div className="min-h-screen mt-10 ">
      <div className="collapse collapse-plus bg-base-200 mb-6">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How often can I donate blood?
        </div>
        <div className="collapse-content">
          <p>You can donate whole blood every 56 days.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-6">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What are the eligibility criteria for blood donation?
        </div>
        <div className="collapse-content">
          <p>To be eligible, you must meet certain age, weight, and health requirements. Generally, donors must be at least 17 years old, weigh at least 110 pounds, and be in good health.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-6">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Can I donate blood if I have a medical condition?
        </div>
        <div className="collapse-content">
          <p>It depends on the medical condition. Some conditions may disqualify you from donating blood, while others may not.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-6">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How long does the blood donation process take?
        </div>
        <div className="collapse-content">
          <p>The donation process typically takes about 1 hour, including registration, medical history screening, donation, and refreshments.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-6">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Can I donate blood if I have recently traveled to a different country?
        </div>
        <div className="collapse-content">
          <p>It depends on the country you have visited and any potential health risks associated with travel. In some cases, travel may temporarily defer your eligibility to donate blood.</p>
        </div>
      </div>
    </div>
  );
};

export default More;
