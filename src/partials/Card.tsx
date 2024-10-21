

const Card = ({ data }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index} className="p-1 max-w-sm bg-bg-100 border-bg-200 border border-l-4 hover:bg-bg-200 shadow ">
        <div className=' flex justify-between'>

          <span className="">
            {
              item.name && <h2 className="text-lg font-bold ">{item.name}</h2>
            }
            {
              item.institution && <h2 className="text-lg font-bold">{item.institution}</h2>
            }
            {
              item.Organization && <h2 className="text-md">{item.Organization}</h2>
            }
            {
              item.company && <h2 className="text-md">{item.company}</h2>
            }
            {
              item.position && <p className="text-white ">{item.position}</p>
            }
            {
              item.Description && <p className="text-white break-words">{item.Description}</p>
            }

          </span>



          {/* <span>



            {
              item.rangeDate && <p className="text-white">{`${item.rangeDate}`}</p>
            }
            {
              item.date && <p className="text-white">{`${item.date}`}</p>
            }
            {
              item.location && <p className="text-white">{`${item.location}`}</p>
            }
          </span> */}

        </div>
        <div className=' p-1 flex justify-between'>
          {
            item.degree && <p className="text-white mb-1">{item.degree}</p>
          }

          {
            item.issuer && <h2 className="text-md">{item.issuer}</h2>
          }
        </div>

        {/* <p className='break-words'> {item.summary}</p> */}
      </div>
    ));
  };

  return (
    <div className="max-w-sm shadow ">

      {renderItems()}

    </div>
  );
};

export default Card;
