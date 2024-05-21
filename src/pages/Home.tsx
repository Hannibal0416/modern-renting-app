import React from 'react';
import compactImage from '../assets/compact.jpg';
import sportCarImage from '../assets/sport-car.jpg';
import welcabImage from '../assets/welcab.jpg';
import vanImage from '../assets/van.jpg';
import volvoImage from '../assets/volvo.jpg';
import teslaImage from '../assets/tesla.jpg';
import rvImage from '../assets/rv.jpg';

// Define a type for the car model
type CarModel = {
  name: string;
  image: string;
};

const carModels: CarModel[] = [
  { name: 'Compact', image: compactImage },
  { name: 'Sport Car', image: sportCarImage },
  { name: 'Welcab', image: welcabImage },
  { name: 'Van', image: vanImage },
  { name: 'Volvo', image: volvoImage },
  { name: 'Tesla', image: teslaImage },
  { name: 'RV', image: rvImage }
];

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 my-8">Car models you might like</h2>
      <div className="flex flex-wrap justify-center gap-9">
        {carModels.map((model, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/5 lg:w-1/5 max-w-sm rounded-xl overflow-hidden shadow-lg">
            <img className="w-full" src={model.image} alt={model.name} />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">{model.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;