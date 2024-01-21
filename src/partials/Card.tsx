import React from 'react';

const Card = ({ data }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index} className="mb-4 p-4 bg-slate-500 rounded-md shadow-md">
        <div className='flex justify-between'>
        <span className="">
          <h2 className="text-lg  font-bold">{item.institution || item.company}</h2>
          <p className="text-white mb-2">{item.degree || item.position}</p>
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
