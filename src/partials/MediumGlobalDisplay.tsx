import React from 'react'
import MediumDisplayData from './mediumDisplayData';

const MediumGlobalDisplay = ({ Bigtitle, data }) => {
  const renderItems = () => {
    return data.map((item, index) => (
      <MediumDisplayData key={index} tR={item.name || item.company || item.institution || item.Organization} tL={item.rangeDate || item.level || item.date} bL={item.Description || item.position || item.issuer|| item.degree} summary={item.summary} bR={item.location || item.website} />
    ));
  };

  return (
    <div className='p-2'>
      {
        data.length > 0 && <div>
          <h1 className='text-2xl bold'>{Bigtitle}</h1>
          <hr></hr>
        </div>
      }
      {renderItems()}
    </div>
  );
}

export default MediumGlobalDisplay