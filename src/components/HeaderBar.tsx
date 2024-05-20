import React from 'react';

// Define a type for the component props
type HeaderBarProps = {
  title: string;
};

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
  return (
    <div className="bg-white text-gray-800 text-xl py-4 px-6 fixed top-0 left-0 right-0 z-10 shadow-md">
      <h1 className="font-semibold">{title}</h1>
    </div>
  );
};

export default HeaderBar;