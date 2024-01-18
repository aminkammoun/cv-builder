import React from 'react';

const Card = ({ data}) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-2">{item.institution || item.company}</h2>
        <p className="text-gray-600 mb-2">{item.degree || item.position}</p>
        <p className="text-gray-500">{`${item.startDate} - ${item.endDate || 'Present'}`}</p>
      </div>
    ));
  };

  return (
    <div className="max-w-md mx-auto p-1">
     
      {renderItems()}
    </div>
  );
};

export default Card;
