import React from 'react';

const Card = ({ data }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index} className="mb-4 p-2 bg-gray-800 border-l-4 rounded-md shadow-md">
        <div className='flex justify-between'>

          <span className="">
            {
              item.name && <h2 className="text-lg  font-bold">{item.name}</h2>
            }
            {
              item.institution && <h2 className="text-lg  font-bold">{item.institution}</h2>
            }
            {
              item.Organization && <h2 className="text-lg  font-bold">{item.Organization}</h2>
            }
            {
              item.company && <h2 className="text-lg  font-bold">{item.company}</h2>
            }
            {
              item.position && <p className="text-white ">{item.position}</p>
            }
            {
              item.Description && <p className="text-white ">{item.Description}</p>
            }

          </span>



          <span>



            {
              item.rangeDate && <p className="text-white">{`${item.rangeDate}`}</p>
            }
            {
              item.date && <p className="text-white">{`${item.date}`}</p>
            }
            {
              item.location && <p className="text-white">{`${item.location}`}</p>
            }
          </span>

        </div>
        <div className='flex justify-between'>
          {
            item.degree && <p className="text-white mb-1">{item.degree}</p>
          }

          {
            item.issuer && <h2 className="text-lg  font-bold">{item.issuer}</h2>
          }
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
