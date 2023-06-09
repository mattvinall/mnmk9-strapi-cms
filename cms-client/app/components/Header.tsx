import React from 'react';

const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to MNM-K9!</h1>
      <p className="text-lg mb-8">We provide excellent care for your furry friends.</p>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Book Service
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Sign Up for Raw Dog Food Mailing List
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;