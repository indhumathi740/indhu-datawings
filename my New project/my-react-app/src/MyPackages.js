// Packages.js
import React, { useState } from 'react';
import './css/Packages.css';

const placeOptions = [
  'All Locations',
  'Coimbatore',
  'Karur',
  // Add more locations here
];

const packagesData = [
  {
    name: 'BASIC PACKAGE',
    location: 'Coimbatore',
    speed: '50 Mbps',
    price: 1500,
  },
  {
    name: 'PREMIUM PACKAGE',
    location: 'Karur',
    speed: '100 Mbps',
    price: 2500,
  },
  {
    name: 'HYPE PACKAGE',
    location: 'Coimbatore',
    speed: '50 Mbps',
    price: 200,
  },
  {
    name: 'HYPE PACKAGE',
    location: 'Coimbatore',
    speed: '20 Mbps',
    price: 500,
  },
  {
    name: 'HYPE PACKAGE',
    location: 'Coimbatore',
    speed: '70 Mbps',
    price: 500,
  },
  {
    name: 'HYPE PACKAGE',
    location: 'karur',
    speed: '90 Mbps',
    price: 550,
  },
  // Add more package data here
];

function MyPackages() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [packages, setPackages] = useState(packagesData);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredPackages = packages.filter((pkg) => {
    if (selectedLocation === 'All Locations') {
      return true;
    }
    return pkg.location === selectedLocation;
  });

  return (
    <div className="packages-container">
      <h1>Main Packages</h1>

      <select value={selectedLocation} onChange={handleLocationChange} className="select-dropdown">
        {placeOptions.map((place, index) => (
          <option key={index} value={place}>
            {place}
          </option>
        ))}
      </select>

      <div className="container package-boxes">
        {filteredPackages.map((pkg, index) => (
          <div key={index} className="package-box">
            <div className="package-details">
              <h3 className="package-name">{pkg.name}</h3>
              <p className="package-location">Location: {pkg.location}</p>
              <p className="package-speed">Speed: {pkg.speed}</p>
              <p className="package-price">Price: Rs {pkg.price} / Monthly</p>
              <button className="subscribe-button">Subscribe Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPackages;
