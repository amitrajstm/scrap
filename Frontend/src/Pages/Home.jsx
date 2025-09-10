import React from "react";

const shopNames = [
  "AutoFix Garage",
  "Speedy Motors",
  "Turbo Works",
  "WheelPro",
  "EngineCare",
];
const mechanicNames = [
  "Amit Kumar",
  "Rajesh Singh",
  "Ravi Yadav",
  "Sandeep Sharma",
  "Mohit Verma",
];
const shopLocations = ["Delhi", "Mumbai", "Kolkata", "Bengaluru", "Chennai"];

function generateRandomData(id) {
  return {
    id,
    image: `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 1000
    )}`,
    shop: shopNames[Math.floor(Math.random() * shopNames.length)],
    mechanic: mechanicNames[Math.floor(Math.random() * mechanicNames.length)],
    location: shopLocations[Math.floor(Math.random() * shopLocations.length)],
  };
}

const RandomCard = () => {
  // generate 15 cards
  const cards = Array.from({ length: 15 }, (_, i) => generateRandomData(i));

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-2xl p-4 flex flex-col"
          >
            <img
              src={card.image}
              alt="Shop"
              className="w-full h-40 object-cover rounded-lg"
            />
            <div className="mt-3 flex-1">
              <h2 className="text-lg font-bold text-gray-800">{card.shop}</h2>
              <p className="text-gray-600">Mechanic: {card.mechanic}</p>
              <p className="text-gray-500 text-sm">Location: {card.location}</p>
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg shadow">
                Add Item
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg shadow">
                Chat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomCard;
