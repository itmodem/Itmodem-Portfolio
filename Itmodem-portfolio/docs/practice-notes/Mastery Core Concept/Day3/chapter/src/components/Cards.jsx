import React from 'react';

const Cards = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <img
          src="https://media.istockphoto.com/id/523918603/photo/business-man-portrait.jpg?s=612x612&w=0&k=20&c=N9VCO2fGiQemF2Ixi3dNj2ibJ5Z5o7BYks_PQOtfSoo="
          alt="Logo"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <h1 className="text-xl font-semibold text-gray-800 mb-1">Mr. Rupesh Lal</h1>
      <p className="text-sm text-gray-500 mb-4">Chief Executive Officer</p>
      <div className="text-left text-sm text-gray-700 space-y-2">
        <h3><span className="font-medium">Date of Birth:</span> 17/04/2005</h3>
        <h3><span className="font-medium">Email:</span> developer@rupeshlal.com</h3>
        <h3><span className="font-medium">Phone:</span> +91 7870886355</h3>
      </div>
    </div>
  );
};

export default Cards;
