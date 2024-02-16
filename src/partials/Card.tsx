import React from 'react';

const Card = ({ data }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index} className="mb-4 p-2 bg-black border border-dashed rounded-md shadow-md">
        <div className='flex justify-between'>
          {
            item.name && <h2 className="text-lg  font-bold">{item.name}</h2>
          }
          <span className="">
            {
              item.institution && <h2 className="text-lg  font-bold">{item.institution}</h2>
            }
            {
              item.company && <h2 className="text-lg  font-bold">{item.company}</h2>
            }
            {
              item.degree && <p className="text-white mb-1">{item.degree}</p>
            }
            {
              item.position && <p className="text-white mb-1">{item.position}</p>
            }

          </span>

          {
            item.issuer && <h2 className="text-lg  font-bold">{item.issuer}</h2>
          }
          <span>
            {
              item.startDate && <p className="text-white">{`${item.startDate} - ${item.endDate}`}</p>
            }
            
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
