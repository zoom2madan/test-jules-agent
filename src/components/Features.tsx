import React from 'react';

interface FeaturesProps {}

const Features: React.FC<FeaturesProps> = () => {
  const amenities = [
    "Temperature controlled swimming pool",
    "Unlimited ice cream at the ice cream concierge",
    "Relaxing afternoon sessions at the spa and tea room",
    "Cocktails by the pool",
    "Picnic at the lawns",
    "Personalized alerts on your phone so you dont miss a theme."
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6 text-center">Experience Our Summer Amenities</h2>
      <ul className="list-none pl-0 max-w-md mx-auto">
        {amenities.map((amenity, index) => (
          <li key={index} className="mb-2 text-lg">
            {amenity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
