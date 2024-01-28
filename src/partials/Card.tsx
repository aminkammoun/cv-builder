import React from 'react';

const Card = ({ data }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index} className="mb-4 p-2 bg-black border border-dashed rounded-md shadow-md">
        <div className='flex justify-between'>
        <span className="">
          <h2 className="text-lg  font-bold">{item.institution || item.company}</h2>
          <p className="text-white mb-1">{item.degree || item.position}</p>
          </span>

        <span>
          <p className="text-white">{`${item.startDate} - ${item.endDate || 'Present'}`}</p>
        </span>
        </div>
        
        <p> {item.summary}</p>
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
